//购物车请求接口的数据
import request from "@utils/request.js";
//请求购物车列表,就是点击进入shopcart的页面的时候
export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};

//在shopcart页面和datail页面加入购物车点击按钮添加和减少购物车的商品数量，这里也需要发送请求
export const reqGetAddToCartCount = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

//点击切换商品选中状态,也需要发送请求,多选和单选按钮的请求
export const reqUpdateCheckCart = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuId}/${isChecked}`,
  });
};

//删除购物车商品,也需要发送请求
export const reqGetDelCart = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/cart/deleteCart/${skuId}`,
  });
};
