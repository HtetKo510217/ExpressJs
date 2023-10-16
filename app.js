const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');
app.set('views','views');

const postRouter = require('./routers/postRoute');
const {adminRouter} = require('./routers/adminRoute');

// public folder
app.use(express.static(path.join(__dirname,"public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// middleware
app.use((req,res,next)=> {
    console.log('testing middleware in express');
    next();
})

// admin Router
app.use('/admin',adminRouter);

// post Router home page
app.use(postRouter);

app.listen(3000,()=> {
    console.log('server is running at port 3000');
})