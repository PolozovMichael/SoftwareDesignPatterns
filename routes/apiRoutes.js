const express = require('express');
const router = express.Router();
const User = require('../database/models/userModel');
const {decorator} = require('../components/decorator');

const userProfileFactory = (username, email) => {
    return {
        username,
        email,
        sayHello() {
            console.log(`Hello from ${username}`);
        },
        contactUser() {
            console.log(`Contact me on ${email}`);
        }
    }
}

router.route('/').post((req, res) => {
    const user = new User({
        name : req.body.username,
        email : req.body.email,
        password : req.body.password
    });
    user.save();
    res.redirect('/');
    console.log('User added successfully!');
    // decorator(user.name);
    const userProfile = userProfileFactory(req.body.username,req.body.email);
    console.log(userProfile);
    userProfile.sayHello();
    userProfile.contactUser();
});

module.exports = router;