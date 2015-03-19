var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

    var query = url.parse(req.url, true).query;
    var temp = query.temp;
    
    temp = parseInt(temp);
    
    var f = ((temp)*9/5)+32;

    res.write( temp + ' celsius  will be ' + f.toString() + ' in farenheit');
    
    console.log(temp + ' celsius  will be ' + f.toString() + ' in farenheit');
    res.end();   
    
})

var port = Number(process.env.PORT || 3000);
server.listen(port);