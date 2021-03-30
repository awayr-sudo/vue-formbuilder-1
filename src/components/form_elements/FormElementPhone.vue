<template>
  <el-form-item :label="currentField.label">
    <el-input
      type="text"
      v-maska="['(###) ##-##-##', '(###) ###-####']"
      v-model="phone"
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
      phone: "",
    };
  },
};
</script>
