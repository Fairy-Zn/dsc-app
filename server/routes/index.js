//首页路由
//localhost:9527/index/swipe   //轮播图
//localhost:9527/index/quicknav
//localhost:9527/index/list
const express = require("express");
const router = express.Router();

//分类控制器导入
const IndexController = require("../controller/indexController")
router.get("/swipe", IndexController.Swipe)


module.exports = router   //暴露内容