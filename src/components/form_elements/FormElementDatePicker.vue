<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-date-picker
      v-bind="attributesBinding"
      v-model="date"
      type="date"
      format="MM/dd/yyyy"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "DatePicker",
  props: ["currentField"],
  data() {
    return {
      date: this.currentField.defaultValue
        ? this.currentField.defaultValue
        : "",
    };
  },
  watch: {
    "currentField.defaultValue"() {
      this.date = this.currentField.defaultValue;
    },
  },
  computed: {
    attributesBinding() {
      var attr = {};

      if (this.currentField.disabled) {
        attr.disabled = this.currentField.disabled;
      }

      if (this.currentField.isPlaceholderVisible) {
        attr.placeholder = this.currentField.placeholder;
      }

      if (this.currentField.defaultValue) {
        attr.value = this.currentField.defaultValue;
      }

      return attr;
    },
  },
};
</script>
