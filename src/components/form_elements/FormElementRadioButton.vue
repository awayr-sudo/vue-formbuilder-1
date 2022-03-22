<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
    :label-width="currentField.labelWidth + 'px'"
  >
    <el-radio
      v-model="radio"
      v-for="item in currentField.options"
      :key="item.optionValue"
      :label="item.optionValue"
      :disabled="item.disabled"
      >{{ item.optionLabel }}
    </el-radio>
  </el-form-item>
</template>

<script>
export default {
  name: "RadioButton",
  props: ["currentField"],
  data() {
    return {
      radio: this.currentField.defaultValue
        ? this.currentField.defaultValue
        : "1",
    };
  },
  watch: {
    "currentField.defaultValue"() {
      this.radio = this.currentField.defaultValue;
    },
  },
};
</script>
