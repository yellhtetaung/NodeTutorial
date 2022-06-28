let express = require('express');
let app = express();

app.get('/',function (req,res){
    res.send('Home Page');
});

app.get('/content', (req,res)=>{
    res.send('Content Page');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});

app.listen(3000);