<template>
  <div>
    <div v-html="currentField.htmlContent"></div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: ["currentField"],
};
</script>
