const http = require("http");
const path = require("path");
const fs = require("fs");
var fileName = process.argv[2];

http.createServer(function(req, res) {
    if (fileName == undefined) {
        fs.open(process.argv[1], "r+", function(err, fd) {
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd, buf, 0, statObj.size, 0, function(err, by, buff) {
                if (err) {
                    console.log(err);
                } else {
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    } else {}
}).listen(8081)
console.log("server is listening 8081");