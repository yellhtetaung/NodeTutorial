let fs = require('fs');

// read file
// let data = fs.readFileSync('test.txt','utf-8');
// console.log(data);

// write file
// fs.writeFileSync("mine.txt",data);

let data = fs.readFileSync('mine.txt', 'utf-8');
fs.writeFileSync('test.txt', data);

// မူလ data ကို မဖျက်ပဲ ထပ်ပေါင်းထည့်သွားမယ်
// fs.appendFileSync('test.txt', " Four");