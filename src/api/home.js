//引入发送请求的axios
import request from "@utils/request.js";
//封装一个请求Home页面数据的节点
export const reqGetBaseCategory = ()=>{
    return request({
        method:'GET',
        url:'/product/getBaseCategoryList'
    })
} 
