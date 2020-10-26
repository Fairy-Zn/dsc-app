//cnpm install jsonwebtoken --save
let jwt = require("jsonwebtoken");

let secret = "ajfaldskgjalkdfjalkfjlasjflkajf";

//创建
function createToken(obj) {
    obj.createTime = Date.now()
    return jwt.sign(obj, secret, {
        expiresIn: "1h"
    })
}

//验证
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                reject("token验证失败")
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}
