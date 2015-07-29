var http = require('http');
var core = require('./core');
var log4js = require('log4js');
var logger = log4js.getLogger();
http.createServer(core.createServer).listen(3000);
logger.info("服务器启动:  http://localhost:3000")
