const express = require('express');
const path = require('path');
const app = express();
const postRouter = require('./routers/postRoute');
const adminRouter = require('./routers/adminRoute');

// public folder
app.use(express.static(path.join(__dirname,"public")));

// middleware
app.use((req,res,next)=> {
    console.log('testing middleware in express');
    next();
})

// home page
app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,"views","homePage.html"));
})

// admin Router
app.use('/admin',adminRouter);
// post Router
app.use('/post',postRouter);

app.listen(3000,()=> {
    console.log('server is running at port 3000');
})