//发送请求
import axios from "axios";
import NProgress from 'nprogress';
import { Message } from 'element-ui';
import getUserTempId from "./getUserTempId"
import "nprogress/nprogress.css"

//在请求之前调用可以把数据存在内存中，提升性能
const userTempId = getUserTempId()
const instance = axios.create({
  baseURL: "/api",
  headers:{

  }
});

//请求拦截器
instance.interceptors.request.use(
    (config) => {
    NProgress.start()
    // if(config){
    //     config.headers.token = token
    // }
    //给config的请求头设置临时id在每次发送请求的时候携带临时id
    config.headers.userTempId = userTempId;
    return config;
});

//响应拦截器
instance.interceptors.response.use(
    (response)=>{
        NProgress.done()
        if(response.data.code===200){
            return response.data.data
        }
        const {message} = response.data
        Message.error(message)
        return Promise.reject(message)
    },
    (error)=>{
        NProgress.done()
        const message = error.message || "网络错误"
        Message.error(message)
        return Promise.reject(message)
    }
)

export default instance;