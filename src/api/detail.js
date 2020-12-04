//封装一个发送detail页面数据的函数
import request from "@utils/request.js";

export const reqGetProductDetail = (id) =>{
    return request({
        method:"GET",
        url:`/item/${id}`
    })
}