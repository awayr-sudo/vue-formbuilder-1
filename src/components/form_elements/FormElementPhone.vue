<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-input
      type="text"
      v-maska="['(###) ##-##-##', '(###) ###-####']"
      v-model="phone"
      v-bind="attributesBinding"
    >
    </el-input>
  </el-form-item>
</template>

<script>
import { maska } from "maska";
export default {
  name: "Phone",
  directives: { maska },
  props: ["currentField"],
  data() {
    return {
      phone: this.currentField.defaultValue
        ? this.currentField.defaultValue
        : "",
    };
  },
  watch: {
    "currentField.defaultValue"() {
      this.phone = this.currentField.defaultValue;
    },
  },
  computed: {
    attributesBinding() {
      var attr = {};

      if (this.currentField.isPlaceholderVisible) {
        attr.placeholder = this.currentField.placeholder;
      }

      return attr;
    },
  },
};
</script>
