var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var bodyParser=require('body-parser');
var listRouter=require('./routes/list');
var data=require('./data.json');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', indexRouter);
// app.use('/users', usersRouter);

//发送post请求
app.post('/',function(req,res){
  //判断用户名、密码是否正确
  if(req.body.username===data.users[0].username && req.body.pwd===data.users[0].password){
    //显示列表页面
    res.render('list',{chapterList:data.chapterList})
  }else{
    res.send('用户名或密码错误！！');
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
