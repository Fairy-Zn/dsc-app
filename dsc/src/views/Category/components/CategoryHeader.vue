<!-- 分类头部 -->
<template>
  <div class="category-header">
    <header class="header">
      <a
        class="iconfont icon-back"
        href="javascript:;"
        onClick="window.history.back()"
      ></a>
      <form>
        <input type="search" placeholder="请输入关键字" @click="toSearch" />
        <i class="iconfont icon-search"></i>
      </form>
    </header>
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
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="less" scoped>
.category-header {
  width: 100%;
  height: 3.4rem;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: #fff;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f1f1f1;
  .header {
    display: flex;
    .icon-back {
      font-size: 1.6rem;
      color: #999;
      margin-top: 0.55rem;
      width: 6%;
      margin-left: 1rem;
    }
    form {
      width: 85%;
      position: relative;
      margin-left: 0.5rem;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #ddd;
        border-radius: 1.5rem;
        box-sizing: border-box;
        font-size: 1.2rem;
        text-indent: 1.5rem;
        padding: 0 0 0 1.2rem;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        top: 0;
      }
    }
  }
}
</style>