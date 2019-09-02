const http = require("http");
var server = http.createServer(function(req, res) {
    /**
     * http协议，协议的结构，协议的请求响应过程
     * 状态码
     */
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("<h1>hello world</h1>");
    //响应结束
    res.end();
});
server.listen(8081);
console.log("server is listening 8081");