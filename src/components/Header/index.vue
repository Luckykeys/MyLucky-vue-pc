<template>
  <header class="header">
    <!-- 整个头部上面的一行 -->
    <div class="header_top">
      <div class="container">
        <div class="header_loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login" class="login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="header_typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--整个头部第二行 搜索区域-->
    <div class="header_bottom">
      <h1 class="bottom_logoArea">
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./logo.png" alt="" />
        </router-link>
      </h1>
      <div class="bottom_searchArea">
        <form action="###" class="searchForm">
          <input type="text" />
          <button
            @click="search"
            class="sui-btn btn-xlarge btn-danger"
            type="button"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    search(){
      this.$router.push("/search")
    }
  }
};
</script>

<style lang="less" scoped>
* {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.header {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.header_top {
  background-color: #eaeaea;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.container {
  display: flex;
  justify-content: space-between;
  a:hover{
      color:red;
      text-decoration: none;
  }
}
.header_loginList {
  p {
    float: left;
    margin-right: 10px;
    .register {
      border-left: 1px solid #b3aeae;
      padding: 0 5px;
      margin-left: 5px;
      &:hover{
        color: red;
        text-decoration: none;
      }
    }
    .login:hover {
      color: red;
      text-decoration: none;
    }
  }
}
.container .header_typeList {
  float: right;
  a {
    color: #666;
    padding: 0 10px;
    & + a {
      border-left: 1px solid #b3aeae;
    }
  }
}
.header_bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .bottom_logoArea {
    .logo {
      img {
        width: 175px;
        margin: 25px 45px;
      }
    }
  }
.bottom_searchArea {
    margin-top: 35px;
    input {
      float: left;
      box-sizing: border-box;
      width: 490px;
      height: 32px;
      border: 2px solid #ea4a36;
      outline: none;
    }
    button {
      height: 32px;
      width: 68px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
