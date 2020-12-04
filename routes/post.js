
const router = require('express').Router();
const db = require('../models');


router.post('/new' , (req, res) => {
    const post = db.Post.create({
        title: "Test Title",
        body: "Test Body",
        user_id: 1
    }).then((response) => res.send(response));
})

module.exports = router;