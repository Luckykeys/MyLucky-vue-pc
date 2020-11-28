<template>
  <div class="login">
    <!-- <div class="login_wrap">
      <div class="login_bgc">
        <ul>
          <li>扫码登录</li>
          <li>账户登录</li>
        </ul>
        <div class="content">
          <div>
            <i></i>
            <input type="text" name="" id="" />
          </div>
          <div>
            <i></i>
            <input type="text" name="" id="" />
          </div>
          <div>
            <button></button>
          </div>
          <div></div>
        </div>
      </div>
    </div> -->
    login...
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import {reqLogin} from "@api/user.js"
export default {
  name: "Login",
  methods:{
    login(){
      reqLogin("13700000000","11111111")
      .then((res)=>{
        console.log("res",res)
      })
      .catch((err)=>{
        console.log("err",err)
      })
    }
  }
};
</script>

<style lang="less" scoped>
// .login_wrap {
//   margin: 0 auto;
//   background:url("./loginbg.png");
// }
// .login_bgc{
//   width: 1200px;
//   height: 487px;
// }
</style>
