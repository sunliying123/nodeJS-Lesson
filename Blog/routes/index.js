var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**
   * render页面的渲染
   * 读取ejs文件内容，将文件中占位符(<%=userName %>)
   * 替换成后端给定的数据(也就是render的第二个参数)
   * 再将文件中的代码内容响应到客户端
   */
