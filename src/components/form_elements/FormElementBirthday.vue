<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-input type="text" v-maska="'##/##'" v-model="date" format="MM/dd">
    </el-input>
  </el-form-item>
</template>

<script>
import { maska } from "maska";
export default {
  name: "Birthday",
  directives: { maska },
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
      if (this.currentField.showWordLimit) {
        attr.maxlength = this.currentField.maxlength;
        attr["show-word-limit"] = this.currentField.showWordLimit;
      }

      if (this.currentField.clearable) {
        attr.clearable = this.currentField.clearable;
      }

      if (this.currentField.disabled) {
        attr.disabled = this.currentField.disabled;
      }

      if (this.currentField.showPassword) {
        attr["show-password"] = this.currentField.showPassword;
      }

      if (this.currentField.isPlaceholderVisible) {
        attr.placeholder = this.currentField.placeholder;
      }

      if (this.currentField.defaultValue) {
        attr.modelValue = this.currentField.defaultValue;
      }

      return attr;
    },
  },
};
</script>
