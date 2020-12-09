//这里是支付相关页面的请求
import request from "@utils/request.js";

//获取订单交易页的信息的请求
export const reqGetTrade = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade",
  });
};

//提交订单的请求
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) => {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: {
      tradeNo,
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    },
  });
};

export const reqPayment = (orderId)=>{
    request({
        method:"GET",
        url:`/payment/weixin/createNative/${orderId}`
    })

}