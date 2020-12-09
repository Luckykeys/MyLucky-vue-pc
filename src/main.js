// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import store from "@store/index.js";
// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import "./mock/mockServer";

//应用路由
import router from "./router/index";
import "./plugins/element.js";
import "./plugins/lazyLoad.js";

import "./styles/reset.css";
import "./styles/iconfont.css";
import "swiper/swiper-bundle.min.css";
Vue.config.productionTip = false;
// console.log(router)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
