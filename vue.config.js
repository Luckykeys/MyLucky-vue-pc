//这个里面是修改Vue的配置文件
const path = require("path");
module.exports = {
  //配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, "src/views"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@comps": path.resolve(__dirname, "src/components"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },

  //配置代理服务器
  devServer:{
    proxy:{
      "/api":{
        target:"http://182.92.128.115/",
        changeOrigin:true
      }
    }
  }
};
