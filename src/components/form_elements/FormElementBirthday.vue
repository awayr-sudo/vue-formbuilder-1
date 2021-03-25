<template>
  <el-form-item
    :label="currentField.label"
    :label-width="currentField.labelWidth + 'px'"
  >
    <el-input type="text" v-maska="'##/##'" v-model="date"> </el-input>
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
      date: "",
    };
  },
};
</script>
