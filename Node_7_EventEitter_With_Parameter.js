// Event Emitter => events

// Event Listen, emit

var event = require('events')
var myEmitter = new event.EventEmitter();

myEmitter.on('donow', function (val){
    console.log(`I am start working! ${val}`)
})

myEmitter.emit('donow', 'Bright Myanmar')