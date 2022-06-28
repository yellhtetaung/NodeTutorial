let http = require('http');

let server = http.createServer(function (req,res){
    var obj = {
        name : "Bright Myanmar",
        group : "72coder",
        establish : 7,
        members : 8,
        friend : "No",
        test : 10,
        like : true
    }
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(obj));
});

server.listen(3000,function (){
    console.log("Server is running!");
});