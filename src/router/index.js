// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import Home from "../views/Home/index.vue";
import Login from "../views/Login/index.vue";
import Register from "../views/Register/index.vue";
import Search from "../views/Search/index.vue";

console.log(VueRouter.prototype);
//重写router的push和replace
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  return replace.call(this, location, onComplete, () => {});
};

Vue.use(VueRouter);
// 通过new VueRouter来创建router实例
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
      meta: {
        isFooterHiden: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHiden: true,
      },
    },
    { 
      name:"search",
      path: "/search/:searchText?",
      component: Search,
    },
  ],
});
