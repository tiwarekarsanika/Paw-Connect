const asyncHandler = require("express-async-handler");
const User = require('../models/userdb');
const bcrypt = require('bcrypt');

//@desc Register a user
//@route POST /api/auth/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
});

//@desc Login a user
//@route POST /api/auth/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("User not found!");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong password.");

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = {registerUser, loginUser}