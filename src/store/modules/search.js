import { reqGetProductList } from "@api/search.js";

export default {
  state: {
    productList: {
      trademarkList: [],
      attrsList: [],
      goodsList: [],
    },
  },
  actions: {
    async getProductList(store, data = {}) {
      const productList = await reqGetProductList(data);
      store.commit("GET_PRODUCT_LIST", productList);
    },
  },
  mutations: {
    GET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    },
  },
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    },
    total(state){
      return state.productList.total
    }
  },
};
