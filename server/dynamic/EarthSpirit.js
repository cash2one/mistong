/**
 * 大地之灵
 * @type {juicer|exports|module.exports}
 *
 */

//TODO 模板引擎重构
//TODO 支持markdown的模板格式
//
var juicer = require('../tools/juicer');
var fs = require('fs');
var path = require('path');
// disabled auto strip
juicer.set('strip', false);
module.exports = function(tplPath, options, fn) {
    var deep = function(data, scope, _tmp) {
        _tmp = data;
        scope = scope.replace(/\[([^\]]+)\]/igm, '.$1');
        scope = scope.split('.');
        for (var i = 0; i < scope.length; i++) {
            scope[i] = scope[i].replace(/["']/igm, '');
            if (scope[i] === '_') {
                continue;
            }
            _tmp = _tmp[scope[i]];
        }
        return _tmp;
    };
    var includeFileDetect = function(str, opts) {
        var includeWithoutRender = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*' + juicer.tags.operationClose;
        juicer.settings.includeWithoutRender = new RegExp(includeWithoutRender, 'igm');
        str = str.replace(juicer.settings.include, function($, tpl, data) {
            try {
                if (tpl.match(/^file\:\/\//igm)) {
                    tpl = tpl.substr(7);
                    tpl = path.resolve(path.dirname(tplPath), tpl);
                    tpl = fs.readFileSync(tpl, 'utf8');
                    data === '_' ? data = options : data = deep(options, data);
                    return juicer(includeFileDetect(tpl, opts), data, opts);
                }
                return $;
            } catch (e) {
                console.error('includeFileDetect Error: %s', e.message);
            }
        });
        str = str.replace(juicer.settings.includeWithoutRender, function($, tpl) {
            try {
                if (tpl.match(/^file\:\/\//igm)) {
                    tpl = tpl.substr(7);
                    tpl = path.resolve(path.dirname(tplPath), tpl);
                    tpl = fs.readFileSync(tpl, 'utf8');
                    return includeFileDetect(tpl, opts);
                }
                return $;
            } catch (e) {
                console.error('includeFileDetect Error: %s', e.message);
            }
        });
        return str;
    };
    // console.info(tplPath);
    fs.readFile(tplPath, 'utf8', function(err, str) {
        if (err) return fn(err);
        // PreDetect For Helper Register
        includeFileDetect(str, {
            cache: false
        });
        str = juicer(str, options);
        str = includeFileDetect(str);
        var result=str.match(/<([code]+)(\s*\w*?\s*=\s*".+?")*(\s*?>[\s\S]*?<\/\1>|\s*\/>)/i );
        //console.log(result[0]);
        fn(str);
    });
};