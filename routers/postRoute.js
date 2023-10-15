const express = require('express')
const path = require('path');
const {posts} = require('./adminRoute');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(posts,'from home page');
    res.sendFile(path.join(__dirname,"..",'views', 'homePage.html'));
})

module.exports = router