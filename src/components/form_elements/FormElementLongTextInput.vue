<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-input
      type="textarea"
      :rows="2"
      :placeholder="currentField.placeholder"
      v-model="textarea"
    >
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "LongTextInput",
  props: ["currentField"],
  data() {
    return {
      textarea: this.currentField.defaultValue
        ? this.currentField.defaultValue
        : "",
    };
  },
  watch: {
    "currentField.defaultValue"() {
      this.textarea = this.currentField.defaultValue;
    },
  },
};
</script>
