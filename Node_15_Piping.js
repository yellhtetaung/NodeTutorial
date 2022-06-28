let fs = require('fs');

let myReadStr = fs.createReadStream('test.txt','utf-8');
let myWriteStr = fs.createWriteStream('new.txt');

myReadStr.on('data',function (){
    // myWriteStr.write(chunk);
    myReadStr.pipe(myWriteStr);
})