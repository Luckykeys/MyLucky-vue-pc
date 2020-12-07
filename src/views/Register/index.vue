<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>验证码:</label>
        <ValidationProvider rules="four" v-slot="{ errors }">
          <input type="text" placeholder="请输入验证码" v-model="user.code" />
          <img
            @click="refreshCode"
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <ValidationProvider rules="password" v-slot="{ errors }">
          <input
            type="password"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <!-- <ValidationProvider> -->
        <input
          type="password"
          placeholder="请输入确认密码"
          v-model="user.rePassword"
        />
        <!-- <span class="error-msg">错误提示信息</span> -->
        <!-- </ValidationProvider> -->
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="user.isAgree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="btn">
        <button @click="registerSuccess">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
//手机号必填的验证
extend("required", {
  ...required,
  message: "请输入手机号",
});
//手机号长度为11位
extend("length", {
  validate(value) {
    return value.length === 11;
  },
  message: "手机号码必须为11位!",
});
//必须填写正确的手机号
extend("phone", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "请输入正确的手机号!",
});
//手机登录密码的设置
extend("password", {
  validate(value) {
    return /^(\w){6,20}$/.test(value);
  },
  message: "只能输入6-20个字母、数字、下划线的密码!",
});
//验证码必须是四位
extend("four", {
  validate(value) {
    return value.length === 4;
  },
  message: "请输入正确位数的验证码!",
});
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "", //手机号
        code: "", //验证码
        password: "", //密码
        rePassword: "", //再次确认密码
        isAgree: false, //是否同意协议
      },
    };
  },
  components: {
    ValidationProvider,
  },
  methods: {
    //点击完成登录的时候应该验证两次密码是不是相等和协议是否勾选
    async registerSuccess() {
      try {
        const { phone, password, rePassword, code, isAgree } = this.user;
        //确保前后两次输入的密码是一致的
        if (password !== rePassword) {
          this.$message.error("请确保前后两次输入的密码是一致的!");
          return;
        }
        //确定选择了协议
        if (!isAgree) {
          this.$message.error("请确保同意相关协议和政策");
          return;
        }
        //调用actions函数的方法让其发送请求
        await this.$store.dispatch("register", { phone, password, code });
        //发送请求后跳转页面
        this.$router.push("/login");
      } catch {
        //如果注册失败的话，会清空密码和刷新验证码
        this.user.password = "";
        this.user.rePassword = "";
        this.refreshCode();
      }
    },
    //点击图片刷新验证码
    refreshCode() {
      // console.log(e.target);
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>