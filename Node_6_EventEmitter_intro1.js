var event = require("events")

var myEmitter = new event.EventEmitter();

myEmitter.on("startW", function (){
    console.log('I am start working')
})

let i = 0;
setInterval(function (){
    i++;
    if ((i%3) === 0)
        myEmitter.emit("startW")
    else
        console.log("Waiting to emit ....")
}, 2000);