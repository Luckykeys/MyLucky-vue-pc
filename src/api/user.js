import request from "@utils/request.js";

//封装一个发送登录请求的功能函数
export const reqLogin = ({phone, password}) => {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};

//封装一个发送注册请求的功能函数
export const reqRegister = ({phone, password, code}) => {
  return request({
    method: "POST",
    url: "/user/passport/register",
    data: {
      phone,
      password,
      code,
    },
  });
};
