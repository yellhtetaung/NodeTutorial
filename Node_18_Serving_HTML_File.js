let http = require('http');
let fs = require('fs');

let myReadStr = fs.createReadStream('index.html','utf-8');

let server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    myReadStr.pipe(res);
});

server.listen(3000,function (){
    console.log('Server is running!');
})