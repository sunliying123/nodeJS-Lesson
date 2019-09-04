// process.pid进程的id值，唯一标识
console.log(process.pid);

//返回程序运行的操作系统平台
console.log(process.platform);

//获取命令行参数
//是一个数组，默认会有两个数组元素
//process.argv[0] 表示的是node的可执行文件所在路径
//process.argv[1] 表示当前执行脚本文件所在的路径
//process.argv[2] 2以后的表示的是传入的命令行参数
//process.cwd  返回进程的当前工作目录。
console.log(process.argv);