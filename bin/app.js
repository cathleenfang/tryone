var express = require('express');
var app = express();

//设置jade为渲染引擎
app.set('view engine', 'jade');
app.set('views', '/dev')

app.get('/', function (req, res) {
    res.render(index);
});

app.listen(3333);