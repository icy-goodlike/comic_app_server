/**
 * 在这里定义文章列表路由处理函数，供 /router/article.js 模块进行调用
 */
//导入数据库模块
const db = require('../db/index')

    
// 获取文章列表的处理函数
exports.getArticleList = (req, res) => {
   //获取查询参数
  const {_page,_limit} = req.query
  const sql = `select * from comic_list where page = ?`
  db.query(sql,_page, function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.send({ status: 1, message: err.message })
    }
    //成功
    if(_limit >20 ||_limit <0) {
      return res.send({ status: 1, message:'请检查参数是否合法！' })
    }
    const result = results.slice(0,_limit)
    return res.send({
      status: 0, //状态 0 表示成功，状态 1表示失败
      msg: 'GET请求成功', //状态描述
      data: result //需要响应给客户端的具体数据
    })
  })
}
