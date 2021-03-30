import Vue from "vue";

// ================
// Use Element UI
// ----------------
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // Default lang is Chinese
Vue.use(Element, { locale });
import "./assets/scss/main.scss";

import App from "./App";

// ================
// Lodash
// ----------------
import VueLodash from "vue-lodash";
Vue.use(VueLodash);

// ================
// Use Vue Router
// ----------------
import router from "./router";

// ================
// Vue-stash aka simple vuex alternative
// ----------------
import VueStash from "vue-stash";
import store from "./store";
import Maska from "maska";

// Now you register `'el-tiptap'` component globally.
Vue.use(VueStash);
Vue.use(Maska);

Vue.config.productionTip = false;
Vue.prototype.apiEndpoint = null;

var vm = new Vue({
  el: "#app",
  router,
  data: { store, message: "Hello Vue!" },
  render: (h) => h(App),
}).$mount("#app");
var myVar = {
  get a() {
    console.log("msg", vm.message);
    return vm.message;
  },
  set a(b) {
    vm.message = b;
    console.log("msg b", b);
  },
};
export default vm;
