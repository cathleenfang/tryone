'usr strict'

var express = require('express');
// var http = require('http');
// var path = require('path');
// var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});
app.listen(3000);
// //设置jade为渲染引擎
// app.set('view engine', 'jade');
// app.set('views', '/dev')

// app.get('/', function (req, res) {
//     res.render(index);
// });

// app.listen(3333);