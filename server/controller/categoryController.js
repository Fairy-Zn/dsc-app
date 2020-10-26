//引入自定义db的模块
const { connection, sqlQuery } = require("../mysql/db")

exports.CategoryNav = async(req, res) => {
    const sql = `SELECT * FROM menu`
    let categoryListDatas = await sqlQuery(sql)
    res.json({
        "status": 200,
        "msg": "成功",
        data: categoryListDatas
    })
}

exports.Category = async(req, res) => {
    //SELECT * FROM category WHERE parent_id=858   二级分类
    //SELECT * FROM category WHERE parent_id=1129  三级分类

    // try catch 异常处理  类似于 if(){}else{}
    let id = req.params.id
    try {
        const sql_category = `SELECT * FROM category WHERE parent_id=${id}`
        const res_category = await sqlQuery(sql_category)
        console.log(res_category);
        const parent_id_arr = []
            //[ 1105, 1115, 1129, 1145, 1160 ] 这里存的是二级分类的cat_id,三级分类的parent_id等于二级分类的cat_id
        res_category.forEach((v) => {
            parent_id_arr.push(v.cat_id)
        })
        console.log(parent_id_arr);

        //三级分类
        const sql_category_child = `SELECT * FROM category WHERE parent_id in (${parent_id_arr})`
        const res_category_child = await sqlQuery(sql_category_child)

        res_category.forEach(v => {
            v.child = []
        })



        res_category.forEach(v => {
            res_category_child.forEach(item => {
                if (v.cat_id == item.parent_id) {
                    v.child.push(item)
                }
            })
        })


        res.json({
            data: res_category
        })

    } catch (error) {
        res.send(error)
    }
}

//商品列表
exports.GoodsList = async(req, res) => {
    //http://localhost:9527/api/v1/category/goodslist?cat_id=1106
    //SELECT * FROM goods WHERE cat_id=1106 LIMIT 0,3
    console.log(req.query.cat_id);
    let id = req.query.cat_id
    const size = req.query.size || 10
    const num = req.query.page || 1
    const page = (num - 1) * size

    const sqlcount = `SELECT COUNT(*) FROM goods WHERE cat_id=${id}` //总数
    let sql = `SELECT * FROM goods WHERE cat_id=${id} limit ${page},${size}` //分页

    let goodsDatas = await sqlQuery(sql)
    let countData = await sqlQuery(sqlcount)
    console.log(countData);
    let total = countData[0]['COUNT(*)']
    console.log(total);
    let pages = Math.ceil(total / size)
    res.json({
        "status": 200,
        "msg": "成功",
        total: total,
        pages: pages,
        data: goodsDatas
    })

}

//商品详情接口

exports.GoodsDetail = async(req, res) => {
    //http://localhost:9527/api/v1/category/goodsdetail?goods_id=621
    let goods_id = req.query.goods_id
    let sql_detail = `SELECT * FROM goods WHERE goods_id=${goods_id}`
    let goodsDetailDatas = await sqlQuery(sql_detail)
    res.json({
        "status": 200,
        "msg": "成功",
        data: goodsDetailDatas
    })
}