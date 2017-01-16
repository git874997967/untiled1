var express = require('express');
var port=process.env.PORT||3000;


/*
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
*/

var app = express();

/*对目录进行拼接*/
app.use(express.static(path.join(__dirname,"bower_components")));
// view engine setup
//app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/*
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
*/

/*
app.use('/', index);
app.use('/users', users);
*/

// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

// error handler
/*
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
*/

  // render the error page
/*
  res.status(err.status || 500);
  res.render('error');
});
*/
/*app 作为 一个服务器  对其进行相关设置*/
app.set("port",port);
app.set("views","./views/pages");
app.set('view engine', 'jade');
app.listen(port,function(){
  console.log("imooc started!");
});
/*将页面数据格式化*/
app.use(express.bodyParser())

//添加路由
app.get('/',function(req,res){
  res.render('/pages/index',{title:'imooc 首页'});
}).get('/admin/list',function(req,res){
res.render('/pages/list',{title:'imooc 列表'});
}).get('/movie/:id',function(req,res){
  res.render('/pages/detail',{title:'imooc 详情'});
}).get('/admin/movie',function(req,res){
  res.render('/pages/admin',{title:'imoon 管理'});
})
module.exports = app;
