const state = {
    num: 1,
    categoryDatas: [], //分类--类别数据
    swipeDatas: [], //首页轮播图
    userInfo: {}, //用户信息
    goodsLists: [], //产品列表
    goodsDetails: [], //产品详情
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [], //购物车数据
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false, //全选时全选按钮
    searchList: []
}
export default state