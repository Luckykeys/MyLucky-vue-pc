import Vue from "vue";
import Vuex from 'vuex';
import modules from "./modules"
// import {reqGetBaseCategory} from "@api/home.js"
//应用vuex
Vue.use(Vuex)
//集中管理的数据
const state = {
    // categoryList: [],
}
//间接更新数据的方法(发送请求等等)
const actions = {
    //发送请求的函数(需要用到的是发送请求的函数的返回值，所有用到await和async)
    // async getCategoryList(store){
    //     const categoryList = await reqGetBaseCategory();
    //     store.commit("GET_CATEGORY_LIST",categoryList)
    // }
    
}
//直接更新数据方法
const mutations = {
    // GET_CATEGORY_LIST(state,categoryList){
    //     state.categoryList = categoryList
    // }
}
//包含计算属性(get)的对象，只读不能设置
const getters = {

}
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules
})
export default store;
