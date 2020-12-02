<template>
  <header class="header">
    <!-- 整个头部上面的一行 -->
    <div class="header-top">
      <div class="container">
        <div class="header-loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login" class="login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="header-typeList">
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
    <div class="header-bottom">
      <h1 class="bottom-logoArea">
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./logo.png" alt="" />
        </router-link>
      </h1>
      <div class="bottom-searchArea">
        <form action="###" class="searchForm" @submit.prevent="search">
          <input type="text" v-model="searchText" />
          <button class="sui-btn btn-xlarge btn-danger">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      const { searchText } = this;
      // const location = "/search" + (searchText ? `/${searchText}`:'')
      // console.log(location)
      const location = {
        name: "search",
      };
      // then((res)=>{
      //   console.log(res+"成功")
      // }).catch((err)=>{
      //   console.log(err)
      // })
      if (searchText) {
        location.params = {
          searchText,
        };
      }

      //添加query参数
      const { categoryName } = this.$route.query;
      // console.log(this.$route.query);
      if (categoryName) {
        location.query = this.$route.query;
      }

      if (this.$route.path.indexOf("/search") > -1) {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
      //应该收集完参数才进行跳转
      // this.$router.push(location);
    },
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
* {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
}
.header-top {
  background-color: #eaeaea;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  a:hover {
    color: red;
    text-decoration: none;
  }
}
.header-loginList {
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
.container .header-typeList {
  float: right;
  a {
    padding: 0 10px;
    & + a {
      border-left: 1px solid #b3aeae;
    }
  }
}
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .bottom-logoArea {
    .logo {
      img {
        width: 175px;
        margin: 25px 45px;
      }
    }
  }
  .bottom-searchArea {
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
