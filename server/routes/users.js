const express = require("express");

const moment = require("moment")
//cnpm install md5-node --save  加密
const md5 = require('md5-node')
let JWT = require("../controller/token.js")
console.log(JWT);
//cnpm install bcryptjs --save  另一种加密方式
const bcrypt = require('bcryptjs');  //引入
// const salt = bcrypt.genSaltSync(10); //加密模式  盐

const { connection, sqlQuery } = require("../mysql/db")
var svgCaptcha = require('svg-captcha');

const router = express.Router();
//引入模块
const UserController = require("../controller/userController")
console.log(UserController);
//配置用户列表路由
router.get("/", UserController.UserList)

router.post("/register", UserController.Register)
router.post("/login", UserController.Login)

//验证码
router.get("/captcha", (req, res) => {
    //生成随机的验证码
    let captcha = svgCaptcha.create({
        size: 4,    //几位验证码
        color: true,  //颜色
        noise: 3,
        ignoreChars: '0o1i'
    });
    console.log(captcha.text.toLocaleLowerCase());

    // 将验证码保存到session中
    req.session.captcha = captcha.text.toLocaleLowerCase()

    //返回给客户端看的
    res.type('svg');
    res.status(200).send(captcha.data);

})

router.get("/captcha2", (req, res) => {
    //生成随机的验证码
    let captcha = svgCaptcha.create({
        size: 4,    //几位验证码
        color: true,  //颜色
        noise: 3,
        ignoreChars: '0o1i'
    });
    console.log(req.session.captcha);
    //返回给客户端看的
    res.type('svg');
    res.status(200).send(captcha.data);

})

module.exports = router