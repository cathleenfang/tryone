'usr strict'

var express = require('express');

var app = express();

//存放静态文件
app.use(express.static('dev'));

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function (req, res) {
  res.send('Hello world ew!');
});

app.get('/index', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(8081);
