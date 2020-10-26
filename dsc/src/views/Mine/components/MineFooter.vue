<!-- 登录底部 -->
<template>
  <div class="mine-footer">
    <div class="login-footer">
      <div class="quick-login">
        ————————<span>使用以下方式登录</span>————————
      </div>
      <div class="login-img">
        <img src="../../../assets/images/下载.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.mine-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  height: 12rem;
  .quick-login {
    color: #f0eeee;
    span {
      color: #888;
      font-size: 1.4rem;
    }
  }
  .login-img {
    height: 4.8rem;
    line-height: 4.8rem;
    width: 4.8rem;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    margin-left: -2.4rem;
    img {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
}
</style>