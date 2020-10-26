//这个文件就是以后启动后台的入口文件   node app.js

//express
//cookie-parser
//express-session
//body-parser
//安装模块 cnpm install express cookie-parser express-session --save

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const path = require("path")
    //引入自定义的路由模块
const userRouter = require("./routes/users.js"); //js后缀名可以省掉
const indexRouter = require("./routes/index.js");
const categoryRouter = require("./routes/category")
const searchRouter = require("./routes/search")

const app = new express(); //new 关键字可以省掉

//在新版本的express中不用下载body-parser也可以接受post发送的文本数据
//配置如下:放在路由上方
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
    //后台允许前端跨域请求数据开始
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
app.use(cookieParser())
app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 30 * 60 * 1000
        },
        rolling: true
    }))
    //后台允许前端跨域请求数据结束
    //使用自定义的路由模块
app.use("/api/v1/users", userRouter); //localhost:9527/users  在这个路径下调用userRouter模块
app.use("/api/v1/index", indexRouter);
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/search", searchRouter)


//错误处理中间件
app.use(function(req, res) {
    res.send("404")
})
app.listen(3000, () => {
    console.log("3000running");
})