<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        v-for="item in currentField.options"
        :key="item.optionValue"
        :label="item.optionValue"
        :disabled="item.disabled"
        >{{ item.optionLabel }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["currentField"],
  data() {
    return {
      checkList: [1],
    };
  },
  watch: {
    "currentField.defaultValue"() {
      this.checkList = this.currentField.defaultValue
        .split(",")
        .map(function(item) {
          return item.trim();
        });
    },
  },
};
</script>

<style>
.el-checkbox-group {
  font-size: 14px;
}
</style>
