let http = require('http');
let port = 3000;
let server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello Zen');
});

server.listen(port, function (){
    console.log('Server is running at Port' + port);
})