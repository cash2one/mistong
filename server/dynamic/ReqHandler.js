var router = require("./router"),
    url=require("url"),
    path=require('path');
var handle = {};
var log4js = require('log4js');
var logger = log4js.getLogger();
var todl =require("../carry/Mercurial");

module.exports = function(req, res, cab) {
 	var urlarg = url.parse(req.url);
    var ext = path.extname(urlarg.pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    logger.info(urlarg.pathname);
	router.attack(urlarg.pathname,req,res);
}