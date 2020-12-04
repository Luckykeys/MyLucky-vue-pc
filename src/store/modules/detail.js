import { reqGetProductDetail } from "@api/detail.js";
export default {
  state: {
    productDetail: {
      categoryView: {},
      spuSaleAttrList: [],
      skuInfo: {},
    },
  },
  getters: {
    categoryView(state) {
      return state.productDetail.categoryView;
    },
    spuSaleAttrList(state) {
      return state.productDetail.spuSaleAttrList;
    },
    skuInfo(state) {
      return state.productDetail.skuInfo;
    },
  },
  actions: {
    async getProductDetail(store, id) {
      //组件中传入id进来然后发送请求
      //定义一个变量接受请求回来的数据
      const productDetail = await reqGetProductDetail(id);
      store.commit("GET_PRODUCT_DETAIL", productDetail);
    },
  },
  mutations: {
    GET_PRODUCT_DETAIL(state, productDetail) {
      state.productDetail = productDetail;
    },
  },
};
