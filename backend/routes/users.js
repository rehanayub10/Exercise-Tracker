const router = require('express').Router();
let User = require('../models/user.model');

//handles HTTP GET requests on root 'url/' path
router.route('/').get((req,res) => {
    User.find()//mongoose method: returns list of users in MongoDB database as a promise 
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//handle incoming HTTP POST requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save() //save to database
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;