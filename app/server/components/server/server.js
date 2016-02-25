var http = require('http');
var server = http.createServer();

server.listen(4000, '127.0.0.1');

console.log("server is listening on 4000");

module.exports = server;
