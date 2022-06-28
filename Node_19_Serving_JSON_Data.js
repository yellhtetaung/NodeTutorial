let http = require('http');

let server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    let Obj = {
        name : "Mg Mg",
        age : 30,
        family : {
            father : "U Mya",
            mother : "Daw Nu"
        }
    }
    res.end(JSON.stringify(Obj));

});

server.listen(3000, function (){
    console.log('Server is running!');
});