//这里是支付相关页面的请求
import request from "@utils/request.js";

//获取订单交易页的信息的请求
export const reqGetTrade = () => {
    return request({
        method:"GET",
        url:"/order/auth/trade"
    })
};
