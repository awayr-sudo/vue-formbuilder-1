<template>
  <div class="el-tabs__inner">
    <el-form
      v-show="activeForm.fieldType != 'Heading'"
      :model="fieldProperties"
      :rules="rules"
      :label-position="labelPosition"
      ref="fieldProperties"
    >
      <el-row>
        <el-col :span="16">
          <el-form-item
            label="Field label"
            v-show="activeForm.hasOwnProperty('label')"
          >
            <el-input v-show="false" v-model="activeForm.fieldId">{{
              activeForm.fieldId
            }}</el-input>
            <el-input v-model="activeForm.label">{{
              activeForm.label
            }}</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            label="Required"
            v-show="activeForm.hasOwnProperty('isRequired')"
          >
            <el-switch
              v-model="activeForm.isRequired"
              :disabled="
                activeForm.hasOwnProperty('isLocked') && activeForm.isLocked
              "
            ></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Merge tag">
        <el-input
          v-model="activeForm.mergeTag"
          :disabled="
            activeForm.hasOwnProperty('isLocked') && activeForm.isLocked
          "
          >{{ activeForm.mergeTag }}</el-input
        >
      </el-form-item>

      <!-- Show only when 'isPlacehodlerVisible' key exist -->
      <el-form-item
        label="Placeholder"
        v-show="
          activeForm.hasOwnProperty('isPlaceholderVisible') &&
            activeForm['isPlaceholderVisible'] == true
        "
      >
        <el-row>
          <el-col :span="24">
            <el-input v-model="activeForm.placeholder">
              {{ activeForm.placeholder }}
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item
        label="Default value"
        v-show="activeForm.fieldType != 'Address'"
      >
        <el-row>
          <el-col :span="24">
            <el-input v-model="activeForm.defaultValue">
              {{ activeForm.defaultValue }}
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item
        label="Button text"
        v-show="activeForm.hasOwnProperty('buttonText')"
      >
        <el-input v-model="activeForm.buttonText">
          {{ activeForm.buttonText }}
        </el-input>
      </el-form-item>

      <el-form-item
        label="Code view"
        v-show="activeForm.hasOwnProperty('fieldText')"
      >
        <el-input v-model="activeForm.fieldText" type="textarea" :rows="10">
          {{ activeForm.fieldText }}
        </el-input>
      </el-form-item>

      <el-form-item
        label="Help text"
        v-show="activeForm.hasOwnProperty('isHelpBlockVisible')"
      >
        <el-row>
          <el-col :span="24">
            <el-input v-model="activeForm.helpBlockText">
              {{ activeForm.helpBlockText }}
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="Active Text"
            v-show="activeForm.hasOwnProperty('activeText')"
          >
            <el-input v-model="activeForm.activeText">{{
              activeForm.activeText
            }}</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="Inactive Text"
            v-show="activeForm.hasOwnProperty('inActiveText')"
          >
            <el-input v-model="activeForm.inActiveText">{{
              activeForm.inActiveText
            }}</el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item
        label="uploadURL"
        v-show="activeForm.hasOwnProperty('uploadURL')"
      >
        <el-input v-model="activeForm.uploadURL">{{
          activeForm.uploadURL
        }}</el-input>
      </el-form-item>

      <el-form-item label="Items" v-show="activeForm.hasOwnProperty('items')">
        <li
          v-for="(item, index) in activeForm.items"
          :key="index"
          class="properties__optionslist"
        >
          <el-row :gutter="5">
            <el-col :span="20">
              <el-input v-model="item.url">{{ item.url }}</el-input>
            </el-col>
            <el-col :span="4">
              <el-button v-show="activeForm.items.length > 1">
                <i class="el-icon-error"></i>
              </el-button>
            </el-col>
          </el-row>
        </li>
        <el-button type="text" @click="addItem(activeForm.items)">
          <i class="el-icon-plus"></i>
          Add more
        </el-button>
      </el-form-item>

      <el-form-item
        label="Options"
        v-if="!activeForm.isFromUrl && activeForm.options"
      >
        <ul class="properties__optionsul">
          <li class="properties__optionslist">
            <el-row :gutter="5">
              <el-col :span="10">
                Label
              </el-col>
              <el-col :span="10">
                Value
              </el-col>
              <el-col :span="4"> </el-col>
            </el-row>
          </li>
          <li
            v-for="(item, index) in activeForm.options"
            :key="index"
            class="properties__optionslist"
          >
            <el-row :gutter="5">
              <el-col :span="10">
                <el-input v-model="item.optionLabel">{{
                  item.optionLabel
                }}</el-input>
              </el-col>
              <el-col :span="10">
                <el-input v-model="item.optionValue">{{
                  item.optionValue
                }}</el-input>
              </el-col>
              <el-col :span="4">
                <el-button
                  @click="deleteOption(activeForm.options, index)"
                  v-show="activeForm.options.length > 1"
                >
                  <i class="el-icon-error"></i>
                </el-button>
              </el-col>
            </el-row>
          </li>
        </ul>
        <el-button type="text" @click="addOption(activeForm.options)">
          <i class="el-icon-plus"></i>
          Add more
        </el-button>
      </el-form-item>

      <el-form-item
        label="Table Columns"
        v-show="activeForm.fieldType === 'TableComponent'"
      >
        <ul class="properties__optionsul">
          <li class="properties__optionslist">
            <el-row :gutter="5">
              <el-col :span="7">
                Prop
              </el-col>
              <el-col :span="7">
                Label
              </el-col>
              <el-col :span="7">
                Width
              </el-col>
              <el-col :span="3"> </el-col>
            </el-row>
          </li>
          <li
            v-for="(column, index) in activeForm.tableColumns"
            :key="index"
            class="properties__optionslist"
          >
            <el-row :gutter="5">
              <el-col :span="7">
                <el-input v-model="column.prop">{{ column.prop }}</el-input>
              </el-col>
              <el-col :span="7">
                <el-input v-model="column.label">{{ column.label }}</el-input>
              </el-col>
              <el-col :span="7">
                <el-input @change="columnWidth" v-model="column.width">{{
                  column.width
                }}</el-input>
              </el-col>
              <el-col :span="3">
                <el-button
                  @click="
                    deleteColumn(activeForm.tableColumns, index, column.prop)
                  "
                  v-show="activeForm.tableColumns.length > 1"
                >
                  <i class="el-icon-error"></i>
                </el-button>
              </el-col>
            </el-row>
          </li>
        </ul>
        <el-button type="text" @click="addColumn(activeForm.tableColumns)">
          <i class="el-icon-plus"></i>
          Add more
        </el-button>
      </el-form-item>

      <el-button type="primary" @click="saveField">Save</el-button>
    </el-form>
    <!-- <el-button
      v-show="activeForm.hasOwnProperty('advancedOptions')"
      size="mini"
      @click="advancedPropsVisible = true"
      style="width: 100%;"
      type="success"
    >
      Advanced Options
    </el-button>
    <el-dialog
      :close-on-click-modal="false"
      title="Advanced Options"
      :visible.sync="advancedPropsVisible"
    >
      <el-form ref="OptionsForm" :rules="dialogRules">
        <rating-advanced-props
          v-if="activeForm.fieldType === 'Rating'"
        ></rating-advanced-props>
        <text-input-advanced-props
          v-if="activeForm.fieldType === 'TextInput'"
        ></text-input-advanced-props>
        <html-advanced-props
          v-if="
            activeForm.fieldType === 'HtmlComponent' ||
              activeForm.fieldType === 'Heading'
          "
        ></html-advanced-props>
        <number-input-advanced-props
          v-if="activeForm.fieldType === 'NumberInput'"
        ></number-input-advanced-props>
        <select-list-advanced-props
          v-if="activeForm.fieldType === 'SelectList'"
        ></select-list-advanced-props>
        <options-advanced-props
          v-if="
            activeForm.fieldType === 'RadioButton' ||
              activeForm.fieldType === 'Checkbox'
          "
        ></options-advanced-props>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmForm">Confirm</el-button>
      </div>
    </el-dialog> -->
    <el-dialog
      @close="activeTabForFields = 'elements'"
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
        <el-button type="primary" @click="saveField()">Save & Close</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import RatingAdvancedProps from "./RatingAdvancedProps";
// import TextInputAdvancedProps from "./TextInputAdvancedProps.vue";
// import HtmlAdvancedProps from "./HtmlAdvancedProps.vue";
// import NumberInputAdvancedProps from "./NumberInputAdvancedProps.vue";
// import OptionsAdvancedProps from "./OptionsAdvancedProps.vue";
// import SelectListAdvancedProps from "./SelectListAdvancedProps.vue";
import { FormBuilder } from "../formbuilder";
import HeadingProps from "./HeadingProps.vue";
import axios from "axios";
import Vue from "vue";
export default {
  name: "Properties",
  components: {
    HeadingProps,
    // RatingAdvancedProps,
    // TextInputAdvancedProps,
    // HtmlAdvancedProps,
    // NumberInputAdvancedProps,
    // OptionsAdvancedProps,
    // SelectListAdvancedProps,
  },
  store: ["activeForm", "activeTabForFields"], // Get the form data from Home
  data() {
    return {
      headingPropsVisible: false,
      labelPosition: "top",
      fieldProperties: {},
      rules: {},
      advancedPropsVisible: false,
      dialogRules: {
        dataUrl: [
          { required: true, message: "Please input url", trigger: "change" },
        ],
      },
    };
  },
  mounted() {
    // console.log("activeform ->", this.activeForm);
    // console.log(
    //   "activeForm.hasOwnProperty('span') ->",
    //   Vue.prototype.apiEndpoint,
    //   this.activeForm.hasOwnProperty("span")
    // );
  },
  methods: {
    deleteOption(option, index) {
      this.$delete(option, index);
    },
    addOption(option) {
      let count = option.length + 1;
      option.push({
        optionLabel: "Option Label " + count,
        optionValue: "Option " + count,
      });
    },
    addItem(item) {
      item.push({
        url: "",
      });
    },
    deleteColumn(column, index, prop) {
      this.$delete(column, index);
      this.activeForm.tableDatas.forEach(function(ele) {
        delete ele[prop];
      });
    },
    addColumn(tableColumns) {
      tableColumns.push({
        prop: "",
        label: "",
        width: 180,
      });
    },
    columnWidth(value) {
      if (value && isNaN(value)) {
        this.$message.error("Column width should be a number!");
      }
    },
    saveField() {
      console.log(
        "properties",
        this.activeForm,
        localStorage.getItem("user-token")
      );

      var field = this.activeForm;
      axios
        .post(Vue.prototype.apiEndpoint + `save-field`, field)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.headingPropsVisible = false;

          this.activeForm.fieldId = response.data.fieldId;
          console.log(this.activeForm);
          this.activeTabForFields = "elements";
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.properties__optionslist {
  margin-bottom: 5px;
  list-style: none;
  list-style-type: none;
}
.properties__optionsul {
  padding: 0;
}
</style>
