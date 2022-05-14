//导入 express模块
const express = require('express')
//导入cors中间件
const cors = require('cors')

// // 导入并注册用户路由模块
// const userRouter = require('./router/user')
const articleRouter = require('./router/article')

//创建express服务器实例
const app = express()

//托管静态资源
app.use(express.static('public'))

//将cors注册全局中间件
app.use(cors())
//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//导入注册文章列表路由模块
app.use('/api',articleRouter)
//TODO

//调用app.listen指定端口号并启动服务器
app.listen(3007,()=>{
  console.log("api server start at http://127.0.0.1:3007");
})