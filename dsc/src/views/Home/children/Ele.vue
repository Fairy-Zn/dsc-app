<!-- 首页-家用电器 -->
<template>
  <div class="home-index">
    <div class="ele-top">
      <div class="item" v-for="list in listDatas" :key="list.id">
        <img :src="list.imgsrc" alt="" />
        <p>{{ list.title }}</p>
      </div>
    </div>
    <div class="ele-top">
      <div class="item" v-for="list in listDatas" :key="list.id">
        <img :src="list.imgsrc" alt="" />
        <p>{{ list.title }}</p>
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
    return {
      listDatas: [
        {
          id: 1,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734207245.jpg",
          title: "厨房电器",
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734159068.jpg",
          title: "大家电",
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734026258.jpg",
          title: "个护健康",
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985733968835.jpg",
          title: "五金家装",
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985733825468.jpg",
          title: "生活电器",
        },
      ],
    };
  },
};
</script>
<style lang="less">
.home-index {
  width: 94%;
  height: 100%;
  padding: 0 3%;
  background: #f4f4f4;
  .ele-top {
    margin-top: 1rem;
    height: 10rem;
    background: #fff;
    width: 94.5%;
    text-align: center;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    .item {
      width: 20%;
      text-align: center;
      img {
        width: 5.4rem;
      }
      p {
        margin-top: 1rem;
      }
    }
  }
}
</style>