//查询语句
//SELECT 字段1,字段2 FROM 表名
// SELECT user_id, sex, user_name, age FROM users

//SELECT * FROM users WHERE age>=18  查询年龄大于等于18的数据
//or  或者   SELECT * FROM users WHERE age=18 or age=20
//and 和     SELECT * FROM users WHERE age=18 AND phone=13673618137
//SELECT * FROM users  ORDER BY age DESC   根据年龄降序排列    DESC降序   ASC升序  默认升序

// 模糊查询
// SELECT * FROM users WHERE address LIKE "%郑州市%"    //地址包含郑州市
// SELECT * FROM users WHERE address LIKE "河南%"       //地址以河南开头
// SELECT * FROM users WHERE address LIKE "%新区"       //地址以新区结尾的
// SELECT user_name AS name,login_password AS password from users  //使用别名查询

//插入
//INSERT INTO users (user_name,phone) VALUES ("liangliangren","13111111111")
//INSERT INTO users VALUES ("","a","123456","13673618137","123@qq.com","18","0","11111","1","0")
//INSERT INTO users SET user_name="lll",login_password="123456",phone="13673618131"

// 更新
//UPDATE 表名 SET 字段=字段值  WHERE 条件
//UPDATE users SET login_password=123456000 WHERE user_id=5

//删除
// delete from users where user_i=4

//



