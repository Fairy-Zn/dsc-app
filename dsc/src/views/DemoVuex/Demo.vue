<!--  -->
<template>
  <div class="demo">
    <h2>vuex----</h2>
    <h2>{{ this.$store.state.num }}</h2>
    <div style="margin-top: 1rem">
      <button @click="addNum">修改num的值</button>
    </div>
    <div style="margin-top: 1rem">
      <button @click="addNumX(10)">修改num的值--增加X</button>
    </div>
    <div style="margin-top: 1rem">
      <button @click="actAddNum()">提交actions 修改num的值</button>
    </div>
    <div style="margin-top: 1rem">
      <button @click="actAddNumX(10)">提交actions 修改num的值X</button>
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
  methods: {
    addNum() {
      this.$store.commit("addNum");
    },
    addNumX(data) {
      this.$store.commit("addNumX", data);
    },
    actAddNum() {
      this.$store.dispatch("actAddNum");
    },
    actAddNumX(data) {
      this.$store.dispatch("actAddNumX", data);
    },
  },
  mounted() {
    console.log(this.$store.state.num);
  },
};
</script>
<style>
</style>