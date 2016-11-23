'use strict'

var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('hello word');
}).listen(8888);

console.log('sever running at http://');