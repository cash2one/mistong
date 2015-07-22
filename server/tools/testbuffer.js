var showMem = function() {
    var mem = process.memoryUsage();
    var format = function(bytes) {
        return (bytes / 1024 / 1024).toFixed(2) + 'MB';
    };
    console.log('Process: heapTotal ' + format(mem.heapTotal) + ' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
    console.log('----------------------------------------');
};
var d = new Date();
var str = "";
for (i = 0; i < 10000000; i++) {
    str += Math.random()+"";
};
var now = new Date();
showMem();
console.log(now - d);
var buffer = [];
for (i = 0; i < 10000000; i++) {
    buffer.push(Math.random()+"");
};
var tmp = buffer.join("");
var now2 = new Date();
showMem();
console.log(now2 - now);