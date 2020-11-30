import Mock from 'mockjs'
import banners from "./rbanners.json";

Mock.mock("/mock/banners","get",{
    code:200,
    "data|4":banners
})