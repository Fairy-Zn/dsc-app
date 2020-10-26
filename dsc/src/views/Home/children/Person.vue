<!-- 首页-男装女装 -->
<template>
  <div class="home-index">
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
            "https://x.dscmall.cn/storage/data/touch_icon/15985734466563.jpg",
          title: "女装",
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734528540.jpg",
          title: "男装",
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734578011.jpg",
          title: "服饰配件",
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734628946.jpg",
          title: "内衣",
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/data/touch_icon/15985734697038.jpg",
          title: "运动户外",
        },
      ],
    };
  },
};
</script>
<style lang="less">
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
</style>