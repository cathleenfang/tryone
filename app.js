'usr strict'

var express = require('express');

var app = express();

//存放静态文件
app.use(express.static('dev'));
//设置渲染引擎
app.set('view engine', 'pug');
app.set('views', './dev/pugs')

app.get('/index', function (req, res) {
  res.render('index');
});

app.listen(8081);
