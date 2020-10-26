<!-- 登录头部 -->
<template>
  <div class="mine-header">
    <div class="mine-back">
      <a
        class="iconfont icon-back"
        href="javascript:;"
        onClick="window.history.back()"
      ></a>
      <h1>用户登录</h1>
      <form action="">
        <div class="login-username">
          <i class="iconfont icon-user"></i>
          <input
            type="text"
            placeholder="请输入您的用户名或手机号"
            v-model="user_name"
          />
        </div>
        <div class="login-pwd">
          <i class="iconfont icon-pwd"></i>
          <input
            v-if="hide"
            type="password"
            placeholder="请输入登录密码"
            v-model="pass"
          />
          <input
            v-else
            type="text"
            placeholder="请输入登录密码"
            v-model="pass"
          />
          <button
            v-if="hide"
            class="getcode iconfont icon-yincang"
            @click="showHidePass"
          ></button>
          <button
            v-else
            class="getcode iconfont icon-xianshi"
            @click="showHidePass"
          ></button>
        </div>
        <div class="login-register">
          <router-link to="/register" tag="a" class="lg-rs"
            >新用户注册</router-link
          >
          <a href="jacascript:;" class="forget">忘记密码？</a>
        </div>
        <div class="logins">
          <button @click="login">登录</button>
        </div>
      </form>
      <div class="login-message">
        <!-- <a href="#">
          短信验证码登录
          <i class="iconfont icon-more"></i>
        </a> -->
        <router-link to="/message" tag="a" class="lg-rs"
          >短信验证码登录
          <i class="iconfont icon-more"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      hide: true,
      pass: "",
      user_name: "",
      userinfo: {},
    };
  },
  methods: {
    showHidePass() {
      this.hide = !this.hide;
    },
    async login() {
      //登录方法
      if (!this.user_name) {
        Toast("用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {
        Toast("请输入密码！");
        return;
      }

      //请求数据
      const result = await loginuser(this.user_name, this.pass);
      console.log(result);
      this.$router.push("/home");
      // if (result.err_code == 0) {
      //   Toast({
      //     message: result.msg,
      //     position: "center",
      //     duration: 3000,
      //   });
      // }
      // if (result.status == 500) {
      //   Toast({
      //     message: result.msg,
      //     position: "center",
      //     duration: 3000,
      //   });
      // }
      // if (result.status == 500) {
      //   Toast({
      //     message: result.msg,
      //     position: "center",
      //     duration: 3000,
      //   });
      // }
      // if (result.status == 200) {
      //   this.$store.dispatch("getUserInfo", result.data[0]);
      //   this.$router.push("/home");
      // }
    },
  },
};
</script>
<style lang="less">
.mine-back {
  height: 37.5rem;
  padding: 1.1rem;
  .icon-back {
    color: #bdbdbd;
    margin-top: 1rem;
    display: inline-block;
  }
  h1 {
    margin-top: 3.5rem;
    font-size: 3rem;
    font-weight: normal;
  }
  form {
    margin-top: 2.5rem;
    .login-username,
    .login-pwd {
      border-bottom: 1px solid #ddd;
      padding: 0.8rem;
      input {
        width: 29.5rem;
        height: 2.4rem;
        line-height: 2.4rem;
        font-size: 1.4rem;
        color: #666;
      }
      i {
        color: #bdbdbd;
        margin-right: 0.5rem;
      }
      button {
        background: transparent;
      }
    }
  }
}
.login-register {
  margin-top: 1rem;
  position: relative;
  top: 0;
  left: 0;
  .lg-rs {
    font-size: 1.4rem;
    color: #4b89dc;
    position: absolute;
    top: 0;
    left: 0;
  }
  .forget {
    font-size: 1.4rem;
    color: #4b89dc;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.logins {
  margin-top: 5rem;
  height: 4rem;
  line-height: 4rem;
  button {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    background: #f00;
    border-radius: 5px;
    text-align: center;
    color: #fff;
  }
}
.login-message {
  width: 100%;
  margin-top: 3rem;
  text-align: center;
  a {
    color: #f00;
    font-size: 1.5rem;
    i {
      font-size: 1.4rem;
    }
  }
}
</style>