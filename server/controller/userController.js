//引入自定义db的模块
const { connection, sqlQuery } = require("../mysql/db")
    //cnpm install moment --save  格式化时间的模块
const moment = require("moment")
    //cnpm install md5-node --save  加密
const md5 = require('md5-node')
let JWT = require("./token.js")
console.log(JWT);
//cnpm install bcryptjs --save  另一种加密方式
const bcrypt = require('bcryptjs'); //引入
const salt = bcrypt.genSaltSync(10); //加密模式  盐

//用户列表
exports.UserList = async(req, res) => {
    //http://localhost:9527/api/v1/users?page=1&size=5
    console.log(req.query); //{ page: '1', size: '5' }
    const size = req.query.size || 10
    const num = req.query.page || 1
    const page = (num - 1) * size
    let sqlUserList = `SELECT * FROM users where is_show=1 limit ${page},${size}`
    let sqlCount = `SELECT count(*) FROM users`

    let userListDatas = await sqlQuery(sqlUserList)
    let countData = await sqlQuery(sqlCount)
    let total = countData[0]['count(*)']
    let pages = Math.ceil(total / size)
    console.log(countData);
    res.json({
        "status": 200,
        "msg": "成功",
        total: total,
        pages: pages,
        data: userListDatas
    })
}

//用户登录
// exports.Login = async (req, res) => {

// }

//用户注册

exports.Register = async(req, res) => {
    //通过post发送数据
    console.log(req.body); //{ user_name: 'llr', login_password: '123456',phone: '13673618137'}
    let user_name = req.body.user_name

    let phone = req.body.phone
    let login_password = req.body.login_password
        //获取一下当前时间
    let nowDate = moment().format("YYYY-MM-DD HH:mm:ss") //年-月-日 时:分:秒

    let sql_name = `SELECT user_name from users WHERE user_name=? AND is_del=0`
    connection.query(sql_name, user_name, (err, result_name) => { //user_name这个地方的user_name替换sql中的问号
        if (err) {
            return res.json({
                msg: "用户注册失败1",
                status: 500,
                data: err
            })
        }

        //如果result_name为空，说明用户名可以使用
        if (result_name == "") {
            //在验证一下手机号能不能使用
            let sql_phone = `SELECT phone from users WHERE phone=? AND is_del=0`
            connection.query(sql_phone, phone, (err, result_phone) => {
                if (err) {
                    return res.json({
                        msg: "用户注册失败2",
                        status: 500,
                        data: err
                    })
                }
                //result_phone为空，说明手机号可用
                if (result_phone == "") {
                    //到这来说明用户名可用，手机号可用
                    //INSERT INTO users SET user_name="lll",login_password="123456",phone="13673618131"
                    let sql_add = `INSERT INTO users SET user_name=?,login_password=?,phone=?,is_show=1,is_del=0,createtime="${nowDate}"`
                        //let md5_password = md5(login_password)
                    let md5_password = bcrypt.hashSync(login_password, salt); //另一种加密形式
                    connection.query(sql_add, [user_name, md5_password, phone], (err, result) => {
                        if (err) {
                            return res.json({
                                msg: "用户注册失败3",
                                status: 500,
                                data: err
                            })
                        }

                        if (result.affectedRows == 1) { //affectedRows 受影响的行: 1
                            return res.json({
                                msg: "恭喜您注册成功，可以去登录了",
                                status: 200,
                                data: result
                            })
                        } else {
                            return res.json({
                                msg: "用户注册失败4",
                                status: 500,
                                data: result
                            })
                        }


                    })

                } else { //手机号查询结果不为空
                    return res.json({
                        msg: "该手机号已经被注册，请更换手机号再试",
                        status: 500
                    })
                }

            })
        } else { //用户名查询结果不为空
            return res.json({
                msg: "该用户名已经被注册，请更换用户名再试",
                status: 500
            })
        }

    })
}

//登录
exports.Login = async(req, res) => {
    console.log(req.body); //{ user_name: 'llr', login_password: '123456' }
    const user_name = req.body.user_name;
    const captcha = req.body.captcha //前台输入的验证码
    console.log("1111111111111111111111--------" + req.session.captcha);
    //req.session.captcha 后台生成的验证码
    if (captcha !== req.session.captcha) {
        res.json({
            err_code: 0,
            msg: "验证码不正确，请重新输入"
        })
        return;
    }

    console.log(user_name);
    const sql_name = `select * from users where user_name=? and is_del=0`
    connection.query(sql_name, user_name, (err, result) => {
        console.log(result);
        if (err) {
            return res.json({
                msg: "数据库查询失败",
                status: 500
            })
        }

        if (result == "") {
            return res.json({
                msg: "亲，用户名不存在，请注册",
                status: 500
            })
        } else {
            const login_password = bcrypt.compareSync(req.body.login_password, result[0].login_password);
            //如果密码一致返回true
            if (login_password !== true) {
                return res.json({
                    msg: "密码错误，请重新输入",
                    status: 500
                })
            } else {
                let token = JWT.createToken({
                    login: true,
                    user_name: user_name
                })

                console.log(JWT.verifyToken(token));
                console.log(result[0].user_id);

                req.session.userId = result[0].user_id
                return res.json({
                    "msg": "登录成功",
                    status: 200,
                    data: result,
                    token: token
                })
            }
        }

    })

}