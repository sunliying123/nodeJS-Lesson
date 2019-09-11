//1、引入events模块
const events = require("events");
//2、实例化event对象
var eventEmitter = new events.EventEmitter();
//3、绑定事件，事件监听，可以多次触发事件
//如果想要仅仅触发一次事件，则把eventEmitter.on改为eventEmitter.once
eventEmitter.on("hello", function(arg1, arg2) {
        console.log("hello world");
        console.log(arg1, arg2);
    })
    //4、触发事件,可进行参数传递
eventEmitter.emit("hello", "node", "good");
eventEmitter.emit("hello");