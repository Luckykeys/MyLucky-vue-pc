//封装一个发送search页面数据的函数
import request from "@utils/request.js";

export const reqGetProductList = (data) =>{
    return request({
        method:"POST",
        url:"/list",
        data,
    })
}