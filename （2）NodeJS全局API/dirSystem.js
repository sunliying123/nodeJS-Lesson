//1、引入http原生模块
const http = require("http"); //环境自带的http原生模块
const fs = require("fs"); //进行文件操作的原生模块
//2、创建一个服务器
var server = http.createServer(function(req, res) { //回调函数，两个参数：请求对象、响应对象
    //4、当客户端的http请求发起的时候，才会执行回调函数里面的内容
    //5、process.platform得到当前程序执行所在的操作系统
    var sys = process.platform;
    var htmlPath = "";
    switch (sys) {
        case "linux":
            htmlPath = __dirname + "/view/index.html";
            break;
        case "win32":
            htmlPath = __dirname + "\\view\\index.html";
            break;
        default:
            console.log("unknown system");
            break;
    }
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlContent);
    res.end();
});
//服务监听一个窗口
server.listen(8081);
console.log("server is listening 8081");