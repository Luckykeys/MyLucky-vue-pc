// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import store from "@store/index.js"
// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import "./mock/mockServer"
//引入Swiper轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//应用路由
import router from './router/index'
import "./styles/reset.css"
import './plugins/element.js'
Vue.config.productionTip = false;
// console.log(router)
new Vue({
    render:(h)=>h(App),
    router,
    store
}).$mount("#app")