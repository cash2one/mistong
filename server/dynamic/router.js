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

router.reg("/index", function (req, res) {
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
    courlene("./other/template/index.tmpl", data, function (star) {
        res.write(star);
        res.end();
    })
});
module.exports = router;