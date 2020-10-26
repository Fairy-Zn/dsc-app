<!-- 短信验证码登录 -->
<template>
  <div class="loginmessage">
    <div class="login-back">
      <a
        class="iconfont icon-back"
        href="javascript:;"
        onClick="window.history.back()"
      ></a>
      <h1>短信验证码登录</h1>
      <form action="">
        <div class="message-pic">
          <i class="iconfont icon-pic"></i>
          <input type="text" placeholder="请输入图片验证码" />
          <img
            ref="captcha"
            src="http://114.215.173.225:3000/api/v1/users/captcha"
            alt=""
            @click="getCaptcha"
          />
        </div>
        <div class="message-phone">
          <i class="iconfont icon-mobiles"></i>
          <input
            type="tel"
            placeholder="请输入手机号"
            v-model="phone"
            maxlength="11"
          />
          <button class="getcode" @click="getcodeFn" v-if="!num">
            获取验证码
          </button>
          <button class="getcode" disabled v-else>已发送{{ num }}s</button>
        </div>
        <div class="message-codes">
          <i class="iconfont icon-key"></i>
          <input type="text" placeholder="请输入短信验证码" />
        </div>
        <div class="register-message">
          <button type="submit">立即注册</button>
        </div>
        <div class="users-agreement">
          <p>
            若您输入的手机号未注册，将会进入注册流程。注册即视为同意<span
              >《用户协议》</span
            >
          </p>
        </div>
        <div class="register-login-messages">
          <router-link to="/login" tag="a">
            账号密码登录
            <i class="iconfont icon-more"></i>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      num: 0,
      phone: "",
      timer: "",
      captcha: "",
    };
  },
  computed: {
    identifyPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  methods: {
    getcodeFn() {
      if (this.identifyPhone) {
        this.num = 10;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 3000,
        });
      }
    },
    getCaptcha() {
      this.$refs.captcha.src =
        "http://114.215.173.225:3000/api/v1/users/captcha?t=" +
        new Date().getTime();
    },
  },
};
</script>
<style lang="less">
.login-back {
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
    font-size: 1.4rem;
    color: #bdbdbd;
    .message-pic,
    .message-phone,
    .message-codes {
      border-bottom: 1px solid #ddd;
      padding: 0.8rem;
      position: relative;
      i {
        margin-right: 0.5rem;
      }
      input {
        font-size: 1.4rem;
      }
      button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        font-size: 1.4rem;
        color: #666;
      }
      img {
        width: 10rem;
        position: absolute;
        top: 50%;
        right: 0.5rem;
        transform: translateY(-50%);
      }
    }
  }
}
.register-message {
  margin-top: 2rem;
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
    font-size: 1.4rem;
  }
}
.users-agreement {
  margin-top: 1rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.3rem;
  color: #888;
  span {
    color: #4b89dc;
  }
}
.register-login-messages {
  width: 100%;
  margin-top: 5rem;
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