//引入发送请求的axios
import request from "@utils/request.js";
import mockRequest from '@utils/mockRequest.js'
//封装一个请求Home页面数据的节点
export const reqGetBaseCategory = ()=>{
    return request({
        method:'GET',
        url:'/product/getBaseCategoryList'
    })
} 

/**
 * 获取首页轮播图数据
 */
export const reqGetBanners = () => {
    return mockRequest({
      method: "GET",
      url: "/banners",
    });
  };
  
  /**
   * 获取首页楼层数据
   */
  export const reqGetFloors = () => {
    return mockRequest({
      method: "GET",
      url: "/floors",
    });
  };
  