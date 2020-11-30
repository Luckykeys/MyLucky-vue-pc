//发送请求
import axios from "axios";
import NProgress from 'nprogress';
import { Message } from 'element-ui';
import "nprogress/nprogress.css"
const instance = axios.create({
  baseURL: "/mock",
  // headers:{

  // }
});

//请求拦截器
instance.interceptors.request.use((config) => {
    NProgress.start()
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