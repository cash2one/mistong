/**
 * Created by vista on 2015/7/20.
 */
var keys = Object.keys || function (obj) {
        obj = Object(obj)
        var arr = []
        for (var a in obj) arr.push(a)
        return arr
    }
var invert = function (obj) {
    obj = Object(obj)
    var result = {}
    for (var a in obj) result[obj[a]] = a
    return result
}
//(/\n/g, "<br/>");
//(/ /g, "&nbsp;");
var entityMap = {
    escape: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": "&#39;"
    }
}
entityMap.unescape = invert(entityMap.escape)
var entityReg = {
    escape: RegExp('[' + keys(entityMap.escape).join('') + ']', 'g'),
    unescape: RegExp('(' + keys(entityMap.unescape).join('|') + ')', 'g')
}

// 将HTML转义为实体
module.exports = function escape(html) {
    if (typeof html !== 'string') return ''
    return html.replace(entityReg.escape, function (match) {
        return entityMap.escape[match]
    })
}
// 将实体转回为HTML
module.exports = function unescape(str) {
    if (typeof str !== 'string') return ''
    return str.replace(entityReg.unescape, function (match) {
        return entityMap.unescape[match]
    })
}