const express = require('express');
const path = require('path');
const app = express();

app.use((req,res,next)=> {
    console.log('testing middleware in express');
    next();
})
app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,"views","homePage.html"));
})
app.get('/post',(req,res)=> {
    res.sendFile(path.join(__dirname,"views","postPage.html"));
})

app.listen(3000,()=> {
    console.log('server is running at port 3000');
})