var http = require('http');
var core = require('./core');
http.createServer(core.createServer).listen(3000);
