const { connection, sqlQuery } = require("../mysql/db")
    // 搜索列表
exports.SearchList = async(req, res) => {
    //http://localhost:9527/api/v1/search?page=1&size=5
    console.log(req.query); //{ page: '1', size: '5' }
    const keywords = req.query.keywords
    const size = req.query.size || 10
    const num = req.query.page || 1
    const page = (num - 1) * size
    let sqlSearchList = `SELECT * FROM goods WHERE goods_name LIKE "%${keywords}%" LIMIT ${page},${size}`
    let sqlCount = `SELECT count(*) FROM goods WHERE goods_name LIKE "%${keywords}%"`

    let searchListDatas = await sqlQuery(sqlSearchList)
    let countData = await sqlQuery(sqlCount)
    let total = countData[0]['count(*)']
    let pages = Math.ceil(total / size)
    console.log(countData);
    res.json({
        "status": 200,
        "msg": "成功",
        total: total,
        pages: pages,
        data: searchListDatas
    })
}