<template>
  <div class="login">
    <div class="login_wrap">
      <div class="login_bgc">
        <div class="interface">
          <ul class="tab">
            <li>
              <a href="###">扫码登录</a>
            </li>
            <li><a href="###">账号登录</a></li>
          </ul>
          <div class="content">
            <form action="##">
              <div class="input-text clearFix">
                <span></span>
                <input type="text" placeholder="邮箱/用户名/手机号" />
              </div>
              <div class="input-text clearFix">
                <span class="pwd"></span>
                <input type="text" placeholder="请输入密码" />
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn">登&nbsp;&nbsp;录</button>
            </form>
            <button>立即注册</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-button type="primary" @click="login">登录</el-button> -->
  </div>
</template>

<script>
import { reqLogin } from "@api/user.js";
export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "11111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.login_wrap {
  background-color: #e93854;
  height: 487px;
}
.login_bgc {
  width: 1200px;
  margin: 0 auto;
  height: 487px;
  background-image: url("./loginbg.png");
  background-repeat: no-repeat;
}
.interface {
  float: right;
  border: 1p solid white;
  height: 406px;
  width: 420px;
  background: #fff;
  position: relative;
  top: 45px;
  box-sizing: border-box;
  padding: 18px;
}
.tab {
  display: flex;
  li {
    width: 50%;
    float: left;
    text-align: center;
    a {
      width: 100%;
      display: block;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: 700;
      color: #333;
      border: 1px solid #ddd;
      box-sizing: border-box;
      text-decoration: none;
    }
  }
}
.content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
  form {
    margin: 15px 0 18px 0;
    font-size: 12px;
    line-height: 18px;

    .input-text {
      margin-bottom: 16px;

      span {
        float: left;
        width: 37px;
        height: 32px;
        border: 1px solid #ccc;
        background: url("./images/qq.png") no-repeat -10px -201px;
        box-sizing: border-box;
        border-radius: 2px 0 0 2px;
      }

      .pwd {
        background-position: -72px -201px;
      }

      input {
        width: 302px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-left: none;
        float: left;
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 14px;
        line-height: 22px;
        padding-right: 8px;
        padding-left: 8px;

        border-radius: 0 2px 2px 0;
        outline: none;
      }
    }

    .setting {
      label {
        float: left;
      }

      .forget {
        float: right;
      }
    }

    .btn {
      background-color: #e1251b;
      padding: 6px;
      border-radius: 0;
      font-size: 16px;
      font-family: 微软雅黑;
      word-spacing: 4px;
      border: 1px solid #e1251b;
      color: #fff;
      width: 100%;
      height: 36px;
      margin-top: 25px;
      outline: none;
    }
  }
}
</style>
