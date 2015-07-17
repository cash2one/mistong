var express = require('connect');
var app = express();
var marked =require("marked");
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
var fs = require('fs');
var path = require('path');

var juicer = require('juicer');

app.get('/', function (req, res){
  fs.readFile('./readme.md', 'utf-8', function (err, data) {
    if (err) res.send(err);
    marked(data.toString(), function (err, content) {
      if (err) throw err;
      res.send(content);
    });
  });
});
app.get('/syntax', function (req, res){
  fs.readFile('./other/markdown/syntax.md', 'utf-8', function (err, data) {
    if (err) res.send(err);
    marked(data, function (err, content) {
      if (err) throw err;
      res.send(content);
    });
  });
})

app.get('/juicer',function(req,res){

  var html = juicer("Hi, I'm sub content, ${name}, End.",{
        name: 'juicer'
    });

  res.send(html);
});


app.listen(3000)
