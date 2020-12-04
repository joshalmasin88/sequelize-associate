const router = require('express').Router();
const { response } = require('express');
const db = require('../models');

router.post('/new', (req,res) => {
    const user = db.User.create({
        username: "Joshua",
        email: "joshalmasin@gmail.com",
        password: "joshua88"
    }).then((response) =>  res.send(response));
});

router.get('/all', (req,res) => {
    db.User.findAll({
        include:[db.Post]
    }).then((response) => res.send(response))
})

module.exports = router;