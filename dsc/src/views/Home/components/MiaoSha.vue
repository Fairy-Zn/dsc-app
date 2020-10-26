<!-- 秒杀 -->
<template>
  <div class="miaosha">
    <span>{{ dd }}天</span>
    <span>{{ hh }}时</span>
    <span>{{ mm }}分</span>
    <span>{{ ss }}秒</span>
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
    return {
      dd: "00",
      hh: "00",
      mm: "00",
      ss: "00",
      timer: "",
    };
  },
  methods: {
    timerFn() {
      var date = new Date();
      var nowTime = date.getTime();
      var endDate = new Date("2020-12-31 18:00:00");
      var endTime = endDate.getTime();
      var disTime = endTime - nowTime;
      if (disTime > 0) {
        this.dd = Math.floor(disTime / 1000 / 60 / 60 / 24);
        this.dd = this.dd < 10 ? "0" + this.dd : this.dd;
        this.hh = Math.floor((disTime / 1000 / 60 / 60) % 24);
        this.hh = this.hh < 10 ? "0" + this.hh : this.hh;
        this.mm = Math.floor((disTime / 1000 / 60) % 60);
        this.mm = this.mm < 10 ? "0" + this.mm : this.mm;
        this.ss = Math.floor((disTime / 1000) % 60);
        this.ss = this.ss < 10 ? "0" + this.ss : this.ss;
      }
    },
  },
  mounted() {
    this.timer = setInterval(this.timerFn, 1000);
  },
  destroyrd() {
    clearInterval(this.timer);
  },
};
</script>
<style>
</style>