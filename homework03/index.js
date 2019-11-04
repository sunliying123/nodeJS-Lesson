const http=require('http');
const fs=require('fs');
const path=require('path');
const url=require("url");
const queryString=require("querystring");
//定义数据
var chapterList = [
    {
        "chapterId": 1,
        "chapterName": "hello ,这是后台取到的数据",
        "imgPath": "images/1442457564979540.jpeg",
        "chapterDes": "注定，有些路，只能一个人走；有些事，",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 1022
    },
    {
        "chapterId": 2,
        "chapterName": "那些不是事",
        "imgPath": "images/1442201163344838-lp.jpg",
        "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    },
    {
        "chapterId": 3,
        "chapterName": "只想，留住心中的那份静美",
        "imgPath": "images/1442642178239101-lp.jpg",
        "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 202
    },
    {
        "chapterId": 4,
        "chapterName": "所以才会美",
        "imgPath": "images/1442539025939884-lp.jpg",
        "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    }
]
//定义变量存储用户名、密码
var userList=[
    {
        username:'admin',
        pwd:'admin'
    }
]


http.createServer(function(req,res){
    //接收客户端发来的请求
    var urlObj = url.parse(req.url);
    //获取路径名称
    var pathname=urlObj.pathname;
    // //获取images文件夹里面的图片,包括img文件夹和其他
    // //获取img文件夹下的图片
    // var img=pathname.split('/');
    // //获取images文件夹下的其他图片
    // var imgOther=img.pop();
    // console.log(pathname);
    //根据不同路径,读取相应的html文件，渲染到页面
    if(pathname=='/list'){
        chapterList1(res);
    }
    //读取chapterList变量内容并响应到html页面
    else if(pathname=='/getChapterList'){
        showChapterList(res);
    }
    else if(pathname=='/getDetail'){
        showDetail(req,res);
    }
    else if(pathname=='/detail'){
        showChapter(res);
    }

    else if(pathname=='/login'){
        showLogin(res);
    }
    else if(pathname=='/listmanager'){
        showList(res);
    }
    //后台登录验证，用户名和密码直接存储在变量中
    else if(pathname=='/getLogin'){
        loginVerify(req,res);//需要接收数据，所以需要请求对象req和响应对象res
    }
    else if(pathname=='/addChapter'){
        addChapter(res);
    }
    //添加文章功能
    else if(pathname=='/add'){
        add(req,res);
    }
    //删除文章功能
    else if(pathname=='/del'){
        del(req,res);
    }
    
    // //将css样式,js,images文件夹的内容效果分别渲染到页面
    // else if(pathname.slice(0,4)=='/css'){
    //     showCss(res,pathname);
    // }
    // else if(pathname.slice(0,3)=='/js'){
    //     showJs(res);
    // }
    // else if(pathname.slice(0,7)=='/images'){
    //     if(pathname.slice(0,10)=='/img'){
    //         showImg(res,imgOther);
    //     }else{
    //         showOtherImg(res,imgOther)
    //     }
    // }
    //将login页面的图片渲染到前端
    else if(pathname.indexOf('login_bg.jpg')>=0){
        showLoginImage(res);
    }
    //将css样式,js,images文件夹的内容效果分别渲染到页面
    else {
        var pathName = path.join(__dirname, "../homework03", pathname);
        if (pathname.indexOf("js") >= 0) {
            var content = fs.readFileSync(pathName);
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(content);
        } else if (pathname.indexOf("css") >= 0) {
            var content = fs.readFileSync(pathName);
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        } else if (pathname.indexOf("png") >= 0) {
            var content = fs.readFileSync(pathName);
            res.writeHead(200, { 'Content-Type': 'image/png' });
            fs.createReadStream(pathName).pipe(res);
        } else if (pathname.indexOf("jpg") >= 0 || pathname.indexOf("jpeg") >= 0) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            fs.createReadStream(pathName).pipe(res);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plane; charset=utf-8' });
            console.log(pathname);
        }
    }
}).listen(8083);


//读取chapterList变量内容并响应到html页面
function showChapterList(res){
    var content = JSON.stringify(chapterList);
    res.end(content);
}

//列表页
function chapterList1(res){
    //读取文件内容，响应到客户端
    var pathname=path.join(__dirname,"./chapterList.html");//文件路径
    var content=fs.readFileSync(pathname);//根据文件路径得到文件内容
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//响应html页面
    res.write(content);//响应内容到html页面
    res.end();
}

function showDetail(req,res){
    var urlObj = url.parse(req.url);
    var chapterId = queryString.parse(urlObj.query).chapterId;
    var dataList = [];
    chapterList.forEach((data, index) => {
        if (data.chapterId == chapterId) {
            dataList.push(data);
        }
    })
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var str = JSON.stringify(dataList);
    res.end(str);
}
//博客详情页
function showChapter(res){
    var pathname=path.join(__dirname,'./chapter.html');
    var content=fs.readFileSync(pathname);
    // var urlObj=url.parse(req.url,true);
    // var id=urlObj.query.chapterId.slice(0,1);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(content);
    res.end();
    
}

//后台登录页面
function showLogin(res){
    var pathname=path.join(__dirname,'./login.html');
    var content=fs.readFileSync(pathname);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(content);
    res.end();
}
//后台登录验证
function loginVerify(req,res){
    //POST提交表单的话,前面接收数据用on("data")事件监听
    var formData='';
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        var formObj=queryString.parse(formData);
        for(var i=0;i<userList.length;i++){
            console.log(userList[i].username,formObj.username,userList[i].pwd,formObj.pwd);
            if(userList[i].username==formObj.username && userList[i].pwd==formObj.pwd){
                data=1;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
                return;
            }
        }
        data = 0;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    })
}
//将login页面的图片渲染到前端
function showLoginImage(res){
    var pathname=path.join(__dirname,'./login_bg.jpg');
    var content=fs.readFileSync(pathname);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(content);
    res.end();
}
//后台文章列表页面
function showList(res){
    var pathname=path.join(__dirname,"./list.html");
    var content=fs.readFileSync(pathname);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(content);
    res.end();
}
//后台添加文章页面
function addChapter(res){
    var pathname=path.join(__dirname,'./addChapter.html');
    var content=fs.readFileSync(pathname);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(content);
    res.end();
}
//后台添加文章功能
function add(req,res){
    var addList='';
    req.on('data',function(chunk){
        addList+=chunk;
    });
    req.on("end",function(){
        var addObj=queryString.parse(addList); 
        var date=new Date();
        var addData={
            'chapterId':chapterList[chapterList.length-1].chapterId+1,
            'chapterName':addObj.title,
            'imgPath':'',
            'chapterDes':addObj.content,
            'chapterContent':addObj.content,
            'publishTimer':`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
            'author':'admin',
            'views':0
        }
        chapterList.push(addData);
        data={code:0};
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    })
}
//后台删除文章功能
function del(req,res){
    var urlObj = url.parse(req.url);
    var delList='';
    req.on('data',function(chunk){
        delList+=chunk;
    });
    req.on("end",function(){
        var chapterId = queryString.parse(urlObj.query).chapterId;
        for (var i = 0; i < chapterList.length; i++) {
            if (chapterList[i].chapterId == chapterId) {
                chapterList.splice(i, 1);
                data = 1;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
                return;
            }
        }
        data = 0;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
    })
}

// //css效果渲染到页面
// function showCss(res,pathname){
//     var pathName=path.join(__dirname,'./css'+pathname.slice(4));
//     var content=fs.readFileSync(pathName);
//     res.writeHead(200,{'Content-Type':'text/css'});
//     res.write(content);
//     res.end();
// }
// //js效果渲染到页面
// function showJs(res){
//     var pathname=path.join(__dirname,'./js/baiduTemplate.js');
//     var content=fs.readFileSync(pathname);
//     res.writeHead(200,{'Content-Type':'text/JavaScript'});
//     res.write(content);
//     res.end();
// }
// //图片
// function showImg(res,imgOther){
//     var pathname=path.join(__dirname,'./images/img'+imgOther);
//     var content=fs.readFileSync(pathname);
//     //不同的图片类型有不同的响应
//     res.writeHead(200,{'Content-Type':'image/jpg'});
//     res.writeHead(200,{'Content-Type':'image/jpeg'});
//     res.writeHead(200,{'Content-Type':'image/png'});

//     res.write(content);
//     res.end();
// }
// function showOtherImg(res,imgOther){
//     var pathname=path.join(__dirname,'./images/'+imgOther);
//     var content=fs.readFileSync(pathname);
//     //不同的图片类型有不同的响应
//     res.writeHead(200,{'Content-Type':'image/jpg'});
//     res.writeHead(200,{'Content-Type':'image/jpeg'});
//     res.writeHead(200,{'Content-Type':'image/png'});

//     res.write(content);
//     res.end();
// }

console.log("Server is listening 8083");
