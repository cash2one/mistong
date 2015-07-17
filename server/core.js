var juiceradp = require('./dynamic/juiceradapter');
var fs = require('fs');
var path = require('path');
var url = require('url'),
    mime = require("./static/mime").types;
var log4js = require('log4js');
var logger = log4js.getLogger();
var data = {
    list: [{
        name: ' guokai',
        show: true
    }, {
        name: ' benben',
        show: false
    }, {
        name: ' dierbaby',
        show: true
    }],
    blah: [{
        num: 1
    }, {
        num: 2
    }, {
        num: 3,
        inner: [{
            'time': '15:00'
        }, {
            'time': '16:00'
        }, {
            'time': '17:00'
        }, {
            'time': '18:00'
        }]
    }, {
        num: 4
    }]
};
var core = {};
core.createServer = function(req, res) {
    var urlarg = url.parse(req.url);
    var ext = path.extname(urlarg.pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    logger.info(urlarg.pathname);
    if (mime[ext]) {
        var contentType = mime[ext] || "text/plain";
        var realPath = "other" + urlarg.pathname;
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
                        res.write(file);
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
    } else if (ext === "do") {
        juiceradp("./other/template/layout/header.tmpl", data, function(star) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            // res.write(juiceradp(tpl, data));
            res.write(star);
            res.end();
        })
    }
}
module.exports = core;