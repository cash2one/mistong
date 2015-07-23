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