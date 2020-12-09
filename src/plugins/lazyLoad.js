import Vue from "vue";
import VueLazyload from "vue-lazyload";
import loading from "../assets/images/timg.gif";
Vue.use(VueLazyload, {
  loading: loading,
});
