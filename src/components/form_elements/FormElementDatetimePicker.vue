<template>
  <el-form-item
    :label="currentField.label"
    :required="this.currentField.isRequired"
  >
    <el-date-picker
      v-model="date"
      type="datetime"
      placeholder="Select date and time"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "DatetimePicker",
  props: ["currentField"],
  data() {
    return {
      date: "",
    };
  },
};
</script>
