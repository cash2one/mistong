var connect = require('connect')
var http = require('http')
var serveStatic = require('serve-static');
var juicer = require('juicer');
var app = connect();
var fs = require('fs');
var path = require('path');
var url=require('url')


app.use(serveStatic(__dirname + '/other'));
// app.use(serveStatic(__dirname + '/src'));

console.log(__dirname);

// gzip/deflate outgoing responses
var compression = require('compression')
app.use(compression())
    // store session state in browser cookie
var cookieSession = require('cookie-session')
app.use(cookieSession({
        keys: ['secret1', 'secret2']
    }))
    // parse urlencoded request bodies into req.body
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
    // respond to all requests

var data = {
    list: [
        {name:' guokai', show: true},
        {name:' benben', show: false},
        {name:' dierbaby', show: true}
    ],
    blah: [
        {num: 1},
        {num: 2},
        {num: 3, inner:[
            {'time': '15:00'},
            {'time': '16:00'},
            {'time': '17:00'},
            {'time': '18:00'}
        ]},
        {num: 4}
    ]
};



app.use(function(req,res){
	console.log(req.originalUrl);

});	

app.use('/index',function(req, res) {
    fs.readFile('./other/template/layout/header.tmpl', 'utf-8', function(err, tpl) {
        if (err) res.send(err);
        res.writeHead(200, {"Content-Type": "text/html"});
    	res.end(juicer(tpl, data));
    });
})

app.use('/bar', function barMiddleware(req, res, next) {
  // req.url starts with "/bar"
  next();
});

app.use(function onerror(err, req, res, next) {
  res.end("error");
});

//create node.js http server and listen on port
http.createServer(app).listen(3000)