import {
  reqGetCartList,
  reqGetAddToCartCount,
  // reqUpdateCheckCart,
  // reqGetDelCart,
} from "@api/shopcart.js";
export default {
  state: {
    cartList: [],//管理的所有购物车数据
  },
  getters: {

  },
  actions: {
    //请求购物车列表
    async getCartList(store) {
      const cartList = await reqGetCartList();
      store.commit("GET_CARTLIST", cartList);
    },
    //多选和单选按钮的请求
    // async updateCheckCart(store,{skuId, isChecked}){
    //   const cartList = await reqUpdateCheckCart(skuId, isChecked)
    //   store.commit("UPDATE_CHECKCART",cartList)
    // },
    //增加和减少商品数量的请求,这里只需要发送请求
    async getAddToCartCount({commit},{skuId, skuNum}){
      await reqGetAddToCartCount(skuId, skuNum)
      console.log(commit)
    }
  },
  mutations: {
    GET_CARTLIST(state,cartList){
      state.cartList = cartList;
    }
  },
};
