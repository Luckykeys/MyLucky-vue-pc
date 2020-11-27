<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="header_top">
      <div class="container">
        <div class="header_loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="header_typeList">
          <ul>
            <li><router-link>我的订单</router-link></li>
            <li><a>我的购物车</a></li>
            <li><a>我的尚品汇</a></li>
            <li><a>尚品汇会员</a></li>
            <li><a>企业采购</a></li>
            <li><a>关注尚品汇</a></li>
            <li><a>合作招商</a></li>
            <li><a>商家后台</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
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
  width: 1200px;
  margin: 0 auto;
}
.container {
  display: flex;
  justify-content: space-between;
  p {
    float: left;
    margin-right: 10px;
    .register {
      border-left: 1px solid #b3aeae;
      padding: 0 5px;
      margin-left: 5px;
    }
  }
}
.header_loginList {
  margin-left: 20px;
}
.header_typeList {
  display: flex;
  ul {
    display: flex;
    li {
      margin-left: 10px;
    }
  }
}
.bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .bottom_logoArea {
    display: flex;
    .logo {
      img {
        width: 175px;
        margin: 25px 45px;
      }
    }
  }
  .bottom_searchArea {
    display: flex;
    margin-top: 35px;
    input {
      box-sizing: border-box;
      width: 490px;
      height: 32px;
      border: 2px solid #ea4a36;
      float:left;
      outline: none;
    }
    button {
      height: 32px;
      width: 68px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      float: left;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
