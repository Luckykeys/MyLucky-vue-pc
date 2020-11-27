// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import Home from "../views/Home/index.vue";
import Login from "../views/Login/index.vue";
import Register from "../views/Register/index.vue";
import Search from "../views/Search/index.vue";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});
