var http = require('http');
var qs = require('querystring');
var item = [];

var server = http.createServer(function(req,res){
  if('/' == req.url){
    console.log(req.method);
  }

  add(req,res,function(err,data){
    if(err) console.log(err);
    console.log(data);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(data);
  });
});

server.listen(1234);

function add(req,res,fn){
  var body = '';
  req.setEncoding('utf8');
  req.on('data',function(chunk){
    body += chunk;
  });
  req.on('end',function(err){
    if(err) return fn(err);
    fn(err,body);
  });
}
