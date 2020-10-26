const mysql = require("mysql"); //先安装  cnpm install mysql --save

const connection = mysql.createConnection({
    host: 'localhost', //域名或者ip地址
    user: 'root', //mysql的用户名，默认通常为root
    password: '', //mysql的密码
    database: 'tmall' //数据库名
});

//console.log(connection);
// let sql = `SELECT user_name,phone FROM users`
// connection.query(sql, (err, data) => {
//     console.log(data);
// })

//提示一下数据库连接成功或者失败
connection.connect((err) => {
    if (err) {
        console.log("数据库连接失败");
    } else {
        console.log("数据库连接成功");
    }
});

//封装一个方法接收不同的sql取出不同的数据

function sqlQuery(strSql, sqlArr) {
    //Promise
    return new Promise((resolve, reject) => { //reject 失败   resolve成功
        connection.query(strSql, sqlArr, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

//暴露模块

module.exports = {
    connection: connection,
    sqlQuery: sqlQuery
}