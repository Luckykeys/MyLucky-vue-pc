import request from "@utils/request.js";

//封装一个发送请求的功能函数
export const reqLogin = (phone, password) => {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};
