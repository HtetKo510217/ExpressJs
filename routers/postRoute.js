const express = require('express')
const path = require('path');
const {posts} = require('./adminRoute');
const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,"..",'views', 'homePage.html'));
    res.render('homePage', {title: 'Home Page', posts});
})

module.exports = router