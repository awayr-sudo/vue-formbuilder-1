<template>
  <div v-loading="loading">
    <el-container>
      <el-main>
        <div class="wrapper--forms">
          <el-form ref="ruleForm">
            <el-input
              v-show="false"
              id="appPoint"
              v-model="appPoint"
            ></el-input>
            <el-input
              v-show="false"
              id="isFreeUser"
              v-model="isFreeUser"
            ></el-input>
            <el-input v-show="false" id="listId" v-model="listId"></el-input>
            <el-row class="heading">
              <el-col
                v-for="(form, index) in headings"
                :key="index"
                v-bind="form"
                :span="form.span"
                class="form__group"
                :class="{ 'is--active': form === activeForm }"
              >
                <span class="form__selectedlabel">{{
                  form.fieldType == "Heading" ? form.fieldType : "Form Title"
                }}</span>

                <div @click="editElementProperties(form)">
                  <!-- <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label> -->

                  <component
                    :is="form.fieldType"
                    :currentField="form"
                    class="form__field"
                  >
                  </component>
                  <small
                    class="form__helpblock"
                    v-show="form.isHelpBlockVisible"
                    >{{ form.helpBlockText }}
                  </small>
                </div>

                <!-- Actions list -->
                <div class="form__actiongroup">
                  <el-button
                    circle
                    size="mini"
                    icon="el-icon-rank"
                    class="form__actionitem--move"
                    v-show="form.fieldType != 'Heading'"
                  ></el-button>
                  <el-button
                    v-show="form.fieldType == 'Heading'"
                    type="primary"
                    class="form__actionitem--edit"
                    round
                    size="mini"
                    @click="
                      editElementProperties(form);
                      headingPropsVisible = true;
                    "
                    >Edit</el-button
                  >

                  <el-button-group class="form__actionlist">
                    <el-button
                      size="mini"
                      icon="el-icon-plus"
                      @click="cloneElement(index, form)"
                      v-show="!form.isUnique || !form.isLocked"
                    ></el-button>
                    <el-button
                      size="mini"
                      icon="el-icon-delete"
                      @click="deleteElement(index, form)"
                      v-show="!form.isLocked"
                    ></el-button>
                  </el-button-group>
                </div>
              </el-col>
            </el-row>
            <el-row class="main-area">
              <draggable
                :list="forms"
                class="dragArea"
                :group="{ name: 'formbuilder', pull: false, put: true }"
                :options="sortElementOptions"
                ghost-class="sortable__ghost"
                @sort="checkMove"
              >
                <!-- The form elements starts (on the right) -->
                <!-- <div> -->
                <el-col
                  v-for="(form, index) in forms"
                  :key="index"
                  v-bind="form"
                  :span="form.span"
                  class="form__group"
                  :class="{ 'is--active': form === activeForm }"
                  v-if="'Heading' != form.fieldType"
                >
                  <span class="form__selectedlabel">{{
                    form.fieldType != "Heading" ? form.fieldType : "Form Title"
                  }}</span>

                  <div @click="editElementProperties(form)">
                    <!-- <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label> -->

                    <component
                      :is="form.fieldType"
                      :currentField="form"
                      class="form__field"
                    >
                    </component>
                    <small
                      class="form__helpblock"
                      v-show="form.isHelpBlockVisible"
                      >{{ form.helpBlockText }}
                    </small>
                  </div>

                  <!-- Actions list -->
                  <div class="form__actiongroup">
                    <el-button
                      circle
                      size="mini"
                      icon="el-icon-rank"
                      class="form__actionitem--move"
                      v-show="form.fieldType != 'Heading'"
                    ></el-button>
                    <el-button
                      v-show="form.fieldType == 'Heading'"
                      type="primary"
                      class="form__actionitem--edit"
                      round
                      size="mini"
                      @click="
                        editElementProperties(form);
                        headingPropsVisible = true;
                      "
                      >Edit</el-button
                    >

                    <el-button-group class="form__actionlist">
                      <el-button
                        size="mini"
                        icon="el-icon-plus"
                        @click="cloneElement(index, form)"
                        v-show="!form.isUnique || !form.isLocked"
                      ></el-button>

                      <el-popconfirm
                        title="Are you sure to delete this?"
                        @confirm="deleteElement(index, form)"
                      >
                        <template #reference>
                          <el-button
                            size="mini"
                            icon="el-icon-delete"
                            v-show="!form.isLocked"
                          ></el-button>
                        </template>
                      </el-popconfirm>
                    </el-button-group>
                  </div>
                </el-col>
                <!-- </div> -->
              </draggable>
              <el-col :span="24">
                <div class="grid-content btn-submit" justify="center">
                  <el-button type="primary" round>Submit</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
          <el-row :gutter="20" v-show="showGranzaLogo">
            <el-col :span="24">
              <div class="grid-content granza-log" justify="center">
                <img style=" height: 50px" src="/images/logo.png" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>

      <el-aside class="wrapper--sidebar" width="30%">
        <el-tabs type="border-card" v-model="activeTabForFields">
          <el-tab-pane name="elements" label="Elements">
            <elements />
          </el-tab-pane>
          <el-tab-pane
            name="properties"
            label="Properties"
            :disabled="
              Object.keys($store.activeForm).length <= 0 ||
                activeForm.fieldType == 'Heading'
            "
          >
            <properties
              v-show="Object.keys($store.activeForm).length > 0"
              ref="properties"
            ></properties>
          </el-tab-pane>
        </el-tabs>

        <!--{{ $store.activeForm }}-->
      </el-aside>
    </el-container>
    <!-- <el-dialog
      :close-on-click-modal="false"
      title="Edit Your Form Title"
      :visible.sync="headingPropsVisible"
    >
      <el-form ref="OptionsForm">
        <heading-props
          v-if="activeForm.fieldType === 'Heading'"
        ></heading-props>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="headingPropsVisible = false"
          >Save & Close</el-button
        >
      </div>
    </el-dialog> -->
    <!-- <pre>{{ forms }}</pre> -->
  </div>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";
import HeadingProps from "../components/form_elements/properties/HeadingProps.vue";
import _ from "lodash";
import axios from "axios";
import Vue from "vue";
export default {
  name: "Home",
  store: [
    "forms",
    "activeForm",
    "activeTabForFields",
    "showGranzaLogo",
    "listId",
    "isFreeUser"
  ],
  data() {
    return {
      loading: false,
      sortElementOptions: FormBuilder.$data.sortElementOptions,
      headingPropsVisible: false,
      appPoint: "",
      dontUpdate: true,
    };
  },
  mounted() {
    // console.log("form ->", this.forms);
    // console.log("activeform ->", this.activeForm);
    // console.log("my children", this.$);

    this.forms = [];
  },
  components: { ...FormBuilder.$options.components, HeadingProps },
  computed: {
    headings() {
      return this.forms.filter(function(form) {
        console.log("touched");
        return form.fieldType == "Heading";
      });
    },
    elements() {
      return this.forms.filter(function(form) {
        console.log("toccc");
        return form.fieldType != "Heading";
      });
    },
  },
  watch: {
    activeTabForFields: function(val) {
      if (val == "elements") {
        this.activeForm = [];
      }
    },
    showGranzaLogo: function(val, old) {
      if (Vue.prototype.apiEndpoint == "") return;
      console.log("what should i do", val, old);
      if ("undefined" != typeof val && !this.dontUpdate) {
        this.loading = true;

        axios
          .get(Vue.prototype.apiEndpoint + `show-logo`, {
            params: {
              show: val ? 1 : 0,
              listId: this.listId,
            },
          })
          .then((response) => {
            console.log(
              "status",
              response.data.shown,
              "1" == response.data.shown
            );
            this.showGranzaLogo = "1" == response.data.shown;
            this.loading = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    appPoint: function(val) {
      Vue.prototype.apiEndpoint = val;
    },
    listId: function(val) {
      if (Vue.prototype.apiEndpoint == "") return;
      this.listId = val;
      this.loading = true;
      axios
        .get(Vue.prototype.apiEndpoint + `form-fields?id=` + val)
        .then((data) => {
          // JSON responses are automatically parsed.
          var info = JSON.parse(JSON.stringify(data));
          this.forms = info.data.fields;
          this.showGranzaLogo = "1" == info.data.item.show_granza_logo;

          setTimeout(() => {
            this.dontUpdate = false;
          }, 1000);
          this.loading = false;
          // this.forms = [];
          // info.data.forEach((item) => {
          //   this.forms.push(JSON.parse(item));
          // });
          // this.forms = JSON.stringify(data);
        })
        .catch((e) => {
          this.loading = false;
          console.log("error", e);
        });
    },
    forms: {
      handler: function(elems /*, oldVal*/) {
        // grouping the items...
        var grouped = _.groupBy(elems, function(elem) {
          return elem.isLocked ? "locked" : "unlocked";
        });
        // acting on grouped data if any unlocked item available...
        if (grouped.hasOwnProperty("unlocked")) {
          grouped.locked.forEach((item) => {
            grouped.unlocked.forEach((unLockedItem /*, unLockedIndex*/) => {
              if (item.mergeTag == unLockedItem.mergeTag) {
                var oldVal = unLockedItem.mergeTag;
                unLockedItem.mergeTag =
                  unLockedItem.mergeTag +
                  Math.floor(Math.random() * Math.floor(100));
                unLockedItem.invalid = true;
                unLockedItem.invalidMsg = "Duplicate Merge Tag";
                console.log("error, Halt!");
                var msg =
                  "Merge Tag (" +
                  oldVal +
                  ") for " +
                  unLockedItem.label +
                  "  was already in used. New Merge Tag is:" +
                  unLockedItem.mergeTag +
                  ".";
                this.warn(msg);

                return true;
              }
            });
          });

          // console.log("invalid element", invalidElement);
        }

        // Return the object that changed
        // var changed = grouped.unlocked.filter(function(p, idx) {
        //   grouped.locked.forEach(lckItem, idx){}
        // });
        // console.log("element watcher", val, oldVal);
        // Log it
        // console.log("changed", changed);
      },
      deep: true,
    },
  },
  methods: {
    checkMove: function(e) {
      this.loading = true;
      let fields = [];
      this.forms.forEach((item, index) => {
        item.position = index;
        fields[index] = item.fieldId;
      });

      if (this.listId != null) {
        axios
          .post(Vue.prototype.apiEndpoint + `update-order`, {
            params: {
              listId: this.listId,
              fields: fields,
            },
          })
          .then(() => {
            this.loading = false;
          })
          .catch((e) => {
            console.log(e);
            this.loading = false;
          });
      }
    },
    warn(msg) {
      this.$notify({
        title: "Warning",
        message: msg,
        type: "warning",
        duration: 0,
      });
    },
    deleteElement(index, form) {
      // index += this.headings.length;
      console.log("my form", form.listId, form.mergeTag);
      console.log("my form field", form.listId);
      if (form.fieldId != null) {
        axios
          .get(Vue.prototype.apiEndpoint + `delete-field`, {
            params: {
              listId: form.listId,
              mergeTag: form.mergeTag,
            },
          })
          .then((response) => {
            if (response.data.isDeleted) {
              // JSON responses are automatically parsed.
              this.headingPropsVisible = false;
              // this.activeForm = null;
              this.activeTabForFields = "elements";
              FormBuilder.deleteElement(index);
            }
            console.log(response, index);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        FormBuilder.deleteElement(index);
      }
      // FormBuilder.deleteElement(index);
    },
    cloneElement(index, form) {
      index += this.headings.length;
      form.mergeTag = "MMERGE" + Math.floor(Math.random() * 1000) + 1;

      FormBuilder.cloneElement(index, form);
    },
    editElementProperties(form) {
      // this.$refs["ruleForm"].validate((valid) => {
      //   console.log("validating.....");
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
      // console.log("form ->", this.forms);
      if (form.fieldType == "Heading")
        this.$refs["properties"].headingPropsVisible = true;
      FormBuilder.editElementProperties(form);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dragArea {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  min-height: 10px;
  height: calc(60vh);
  z-index: 2;
}
// Display this ghost in <main> only
.sortable__ghost {
  position: relative;
  width: 33.33%;
  border-bottom: 2px solid #3a8ee6;
  margin-top: 2px;
  margin-bottom: 2px;

  [type="button"],
  div,
  span {
    display: none;
  }
  &:before {
    content: "Drag it here";
    background-color: #ecf5ff;
    color: #3a8ee6;
    position: absolute;
    left: 50%;
    font-size: 10px;
    border-radius: 10px;
    line-height: 15px;
    padding: 0 10px;
    top: -6px;
    transform: translateX(-50%);
  }
}

.form__selectedlabel {
  display: none;
  background: #ecf5ff;
  padding: 3px 5px;
  color: black;
  font-size: 10px;
  position: absolute;
  top: -17px;
  right: 15px;
}

.form__actionitem--edit {
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  visibility: hidden;

  &:active,
  &:focus,
  &:hover {
    border-color: #21629a;
    background: #ecf5ff;
  }
}

.form__actionitem--move {
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  visibility: hidden;

  &:active,
  &:focus,
  &:hover {
    border-color: #21629a;
    background: #ecf5ff;
  }
}

.form__actionlist {
  position: absolute;
  margin-top: 10px;
  visibility: hidden;
  z-index: 3;
  right: 0;
  border-radius: 2px;
}

.form__group {
  margin-bottom: 25px;
  border: 1px solid transparent;
  position: relative;

  &:hover {
    border-color: #21629a;

    .form__actionitem--move {
      visibility: visible;
    }
    .form__actionitem--edit {
      visibility: visible;
    }
  }

  &.is--active {
    border-color: #21629a;
    background: #ecf5ff;

    .form__actionlist {
      visibility: visible;
    }
    .form__selectedlabel {
      display: inline-block;
    }
  }
}
</style>
