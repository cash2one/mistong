/**
 * 幽鬼
 */
var router = require("../dynamic/router");
var courlene = require('../dynamic/EarthSpirit');
var baseTmpl="./src/ti/template/";

router.reg('/markdown',function(req,res){

});

router.reg("/",function(req,res){
    courlene(baseTmpl+"index.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/index", function (req, res) {
    courlene(baseTmpl+"index.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/codes", function (req, res) {
    courlene(baseTmpl+"codesnipet.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/compents", function (req, res) {
    courlene(baseTmpl+"compents.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/framework", function (req, res) {
    courlene(baseTmpl+"framework.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
});

router.reg("/react",function(req,res){
    courlene(baseTmpl+"react.tmpl", {}, function (star) {
        res.write(star);
        res.end();
    })
})