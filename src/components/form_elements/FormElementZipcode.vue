<template>
  <el-form-item
    :label="currentField.label"
    :label-width="currentField.labelWidth + 'px'"
  >
    <el-input
      type="text"
      v-maska="'#####'"
      v-model="number"
      maxlength="5"
      show-word-limit
    >
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "NumberInput",
  props: ["currentField"],
  data() {
    return {
      number: "",
    };
  },
  computed: {
    attributesBinding() {
      var attr = {};
      attr.disabled = this.currentField.disabled;
      attr.step = this.currentField.step;
      attr["step-strictly"] = this.currentField.stepStrictly;
      if (this.currentField.hasMinValue) {
        attr.min = this.currentField.min;
      }
      if (this.currentField.hasMaxValue) {
        attr.max = this.currentField.max;
      }
      return attr;
    },
  },
};
</script>
