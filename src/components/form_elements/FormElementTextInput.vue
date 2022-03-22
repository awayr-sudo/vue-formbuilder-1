<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-input v-model="input" v-bind="attributesBinding" value="danish">
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TextInput",
  props: ["currentField"],
  data() {
    return {
      input: this.currentField.defaultValue
        ? this.currentField.defaultValue
        : "",
    };
  },
  watch: {
    "currentField.defaultValue"() {
      this.input = this.currentField.defaultValue;
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

      return attr;
    },
  },
};
</script>
