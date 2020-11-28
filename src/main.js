// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
//应用路由
import router from './router/index'
import "./styles/reset.css"
import './plugins/element.js'
Vue.config.productionTip = false;
// console.log(router)
new Vue({
    render:(h)=>h(App),
    router
}).$mount("#app")