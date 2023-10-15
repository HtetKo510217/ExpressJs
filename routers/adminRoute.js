const express = require('express');
const path = require('path');

const router = express.Router();
const posts = [];

router.get('/create-post', (req, res) => {
    res.sendFile(path.join(__dirname,"..",'views', 'postCreate.html'));
})

router.post('/create-post', (req, res) => {
    posts.push(
        {
            postTitle: req.body.postTitle,
            postContent: req.body.postContent
        }
    );
    res.redirect('/');
})

module.exports = {adminRouter:router, posts};