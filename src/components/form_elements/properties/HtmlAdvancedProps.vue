<template>
  <vue-editor v-model="activeForm.htmlContent"></vue-editor>
</template>
<script>
import { VueEditor } from "vue2-quill-editor";
export default {
  name: "HtmlAdvancedProp",
  store: ["activeForm"],
  components: {
    VueEditor,
  },
};
</script>
