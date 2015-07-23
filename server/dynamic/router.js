var router = {};
var log4js = require('log4js');
var logger = log4js.getLogger();
var _reqPath = {}
var courlene = require('./EarthSpirit');
router.reg = function (urltarget, fn) {
    _reqPath[urltarget] = fn;
};
router.export = function () {
    return _reqPath;
}
router.attack = function (urltarget, req, res) {
    logger.info(urltarget);
    if (_reqPath[urltarget]) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        _reqPath[urltarget](req, res);

    }else{
        logger.error("missing: "+urltarget);
        courlene("./other/template/404.tmpl",{}, function (star) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(star);
            res.end();
        })
    }
}


module.exports = router;