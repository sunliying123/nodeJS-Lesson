var circleModule = require("./childModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log(circleObj.circumference());
console.log(circleObj.area());
/**
 * 1、原生模块，随node环境安装就存在的
 * 2、自定义模块，自己编写的程序
 * 3、第三方模块，在命令中进行安装的模块，从npm
 * 服务器上下载到本地的，直接require("date-now")
 */