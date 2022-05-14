const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/article')

//获取文章列表
router.get('/articles', userHandler.getArticleList)

module.exports = router