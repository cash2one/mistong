var path = require("path"),
    fs = require('fs'),
    mime = require("./mime").types,
    url = require('url');
    
var log4js = require('log4js');
var logger = log4js.getLogger();
var staticpath={
    "other":"other",
    "src":'src',
    "dist":'dist',
    "common":'common'
}

module.exports = function(req, res, cab) {

    var urlarg = url.parse(req.url);
    var pripath=urlarg.path.split("/");

    var realPath ="";
    if(staticpath[pripath[1]]){
        //获取真实的路径
        realPath = urlarg.pathname.substr(1);
    }else{
        realPath = "dist" +urlarg.pathname;
    }

    logger.info("realpath:"+__dirname);
    var ext = path.extname(urlarg.pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    var contentType = mime[ext] || "text/plain";
    
    fs.exists(realPath, function(exists) {
        if (exists) {
            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    res.writeHead(500, {
                        "Content-Type": "text/plain"
                    });
                    res.end(err);
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType
                    });
                    logger.info("load: " + realPath + " by " + contentType)
                    res.write(file,"binary");
                    res.end();
                }
            });
        } else {
            logger.error(" can't find file: " + realPath + " by " + contentType)
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.end();
        }
    });
};