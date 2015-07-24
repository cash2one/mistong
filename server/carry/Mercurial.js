/**
 * 幽鬼
 * 
 */
var router = require("../dynamic/router");
var courlene = require('../dynamic/EarthSpirit');
router.reg('/markdown',function(req,res){
	console.log("LOL222");
})

router.reg("/",function(req,res){
    courlene("./other/template/index.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
})

router.reg("/index", function (req, res) {
    courlene("./other/template/index.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});


router.reg("/codes", function (req, res) {
    courlene("./other/template/codesnipet.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/compents", function (req, res) {
    courlene("./other/template/compents.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/framework", function (req, res) {
    courlene("./other/template/framework.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

