const express = require("express");
const router = express.Router();

//分类控制器导入
const CategoryController = require("../controller/categoryController")

router.get("/", CategoryController.CategoryNav)
router.get("/categorylist/:id", CategoryController.Category)
router.get("/goodslist", CategoryController.GoodsList)
router.get("/goodsdetail", CategoryController.GoodsDetail)

module.exports = router