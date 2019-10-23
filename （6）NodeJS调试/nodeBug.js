// va a = 1;  //SyntaxError表示语法错误

// console.log(a); //ReferenceError表示引用错误，在某个位置使用了未定义变量

const http = require("http");
http.createServer(function(req, res) {
    res.write("hello");
}).listen(8081);