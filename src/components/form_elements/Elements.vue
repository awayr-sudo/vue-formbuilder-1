<template>
  <div class="el-tabs__inner">
    <el-row :gutter="10" class="row-bg">
      <draggable
        :list="fields"
        :clone="clone"
        class="dragArea"
        :group="{ name: 'formbuilder', pull: 'clone', put: false }"
        :sort="false"
      >
        <el-col
          :span="12"
          :class="{ 'is-disabled': checkStopDragCondition(field) }"
          v-for="(field, index) in fields"
          :key="index"
        >
          <el-button class="button__sidebar">
            {{ field.text }}
          </el-button>
        </el-col>
      </draggable>
    </el-row>
    <el-row :gutter="10" class="row-bg">
      <draggable
        :list="fields"
        :clone="clone"
        class="dragArea"
        :group="{ name: 'formbuilder', pull: 'clone', put: false }"
        :sort="false"
      >
        <el-col :span="24">
          <el-switch
            style="display: block"
            v-model="showGranzaLogo"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Show the Granza logo at the bottom of your form."
            @change="handleGranzaLogo"
          >
          </el-switch>
        </el-col>
      </draggable>
    </el-row>
  </div>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";
import draggable from "vuedraggable";

export default {
  name: "Elements",
  store: ["forms", "showGranzaLogo"],
  components: {
    draggable,
  },
  data() {
    return {
      fields: FormBuilder.$data.fields,
      dropElementOptions: FormBuilder.$data.dropElementOptions,
    };
  },
  methods: {
    handleGranzaLogo(done) {
      if (!done) {
        this.$confirm(
          "The Granza logo is an important feature of Granza’s viral networking technology. It is one of several key ways your business will expand automatically. Are you sure? "
        )
          .then((_) => {
            console.log(done, "_", _);
            this.showGranzaLogo = done;
          })
          .catch((_) => {
            console.log(done, "!_", _);
            this.showGranzaLogo = !done;
          });
      }
    },
    clone(field) {
      field.mergeTag = "MMERGE" + Math.floor(Math.random() * 1000) + 1;
      return _.cloneDeep(field);
    },
    checkStopDragCondition(field) {
      var form = this.forms,
        formArray = [];

      for (var key in form) {
        formArray.push(form[key]["fieldType"]);
      }
      // Check if the fieldname exist in formArray
      // And when the field.isUnique too
      return _.includes(formArray, field.name) && field.isUnique;
    },
  },
};
</script>

<style lang="scss" scoped>
.button__sidebar {
  width: 100%;
  margin-bottom: 5px;

  .is-disabled & {
    opacity: 0.4;
  }
}

// Display this ghost in <main> only
.sortable__ghost {
  position: relative;
  width: 33.33%;
  border-bottom: 2px solid #3a8ee6;
  margin-top: 2px;
  margin-bottom: 2px;

  [type="button"] {
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
</style>
