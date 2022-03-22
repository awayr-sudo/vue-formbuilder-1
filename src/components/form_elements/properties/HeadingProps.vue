<template>
  <vue-editor
    v-model="activeForm.htmlContent"
    :editorToolbar="customToolbar"
  ></vue-editor>
</template>
<script>
import { VueEditor } from "vue2-quill-editor";
export default {
  name: "HeadingProp",
  store: ["activeForm"],
  components: {
    VueEditor,
  },
  data() {
    return {
      customToolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
    };
  },
};
</script>
