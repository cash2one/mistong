var juiceradp = require('./dynamic/EarthSpirit');
var path = require('path');
var staticHandler = require("./static/StaticHandler");
var reqHandler = require("./dynamic/ReqHandler");
var router = require("./dynamic/router");
var url = require('url'),
    mime = require("./static/mime").types;
var log4js = require('log4js');
var logger = log4js.getLogger();

var core = {};
core.createServer = function(req, res) {
    var urlarg = url.parse(req.url);
    var ext = path.extname(urlarg.pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    logger.info(urlarg.pathname);
    if (mime[ext]) {
        //将静态文件直接交割给静态处理器处理
        staticHandler(req, res, function() {});
    } else {
        reqHandler(req,res,function(){});
    }
}
module.exports = core;