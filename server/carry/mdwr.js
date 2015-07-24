var router = require("../dynamic/router");
var courlene = require('../dynamic/EarthSpirit');
var marked = require("marked");
var fs = require('fs');
var path = require('path');


marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

router.reg("/button", function(req, res) {
    fs.readFile("./other/markdown/button.md", 'utf8', function(err, str) {
        if (err) return fn(err);
        // PreDetect For Helper Register
        marked(str, function(err, content) {
            if (err) throw err;
            console.log(content);
            res.write(content);
            res.end();
        });
    });
});