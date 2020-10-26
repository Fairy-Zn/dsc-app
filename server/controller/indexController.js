//引入自定义db的模块
const { connection, sqlQuery } = require("../mysql/db")

exports.Swipe = async (req, res) => {
    console.log("userId-----" + req.session.userId);
    const sql = `SELECT * FROM swipe`
    let swipeDatas = await sqlQuery(sql)
    res.json({
        "status": 200,
        "msg": "成功",
        data: swipeDatas
    })
}