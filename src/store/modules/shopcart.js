import {
  reqGetCartList,
  reqGetAddToCartCount,
  reqUpdateCheckCart,
  reqGetDelCart,
} from "@api/shopcart.js";
export default {
  state: {
    cartList: [], //管理的所有购物车数据
  },
  getters: {},
  actions: {
    //请求购物车列表
    async getCartList(store) {
      const cartList = await reqGetCartList();
      store.commit("GET_CARTLIST", cartList);
    },
    //增加和减少商品数量的请求,这里只需要发送请求
    async getAddToCartCount(store, { skuId, skuNum }) {
      await reqGetAddToCartCount(skuId, skuNum);
      store.commit("GET_ADDTOCART_COUNT", { skuId, skuNum });
    },
    // 多选和单选按钮的请求
    async updateCheckCart({ commit }, { skuId, isChecked }) {
      await reqUpdateCheckCart(skuId, isChecked);
      console.log(commit);
      // commit("UPDATE_CHECK_CART",checkResult)
    },
    // 删除当前商品的请求
    async getDelCart(store, skuId) {
      const skuIdRes = await reqGetDelCart(skuId);
      store.commit("GET_DEL_CART", skuIdRes);
    },
  },
  mutations: {
    GET_CARTLIST(state, cartList) {
      state.cartList = cartList;
    },
    GET_ADDTOCART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          // 如果state.cartList传进来skuId和传进入的id一样就传入相对于的num
          cart.skuNum += skuNum;
        }
        return cart; //如果不是就直接返回本身的数据
      });
    },
    // 点击删除商品(如果组件内部手动发送请求了那这里就不需要修改数据)
    GET_DEL_CART(state, skuIdRes) {
      state.cartList = state.cartList.filter((cart) => {
        return cart.skuId !== skuIdRes;
      });
    },
  },
};
