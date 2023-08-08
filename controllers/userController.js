const User = require('../models/userdb');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

const updateUser = asyncHandler(async (req, res) => {
    if (req.body.userId == req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can updat eonly your account.")
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    if (req.body.userId == req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted.");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account.")
    }
});

const getUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    } catch (err) {
        return res.status(500).json(err);
    }
});

const followUser = asyncHandler(async (req, res) => {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currUser.updateOne({$push: {following: req.params.id}});
                res.status(200).json("User has been followed.");
            } else {
                res.status(403).json("You already follow this user.")
            }     
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot follow yourself.")
    }
});

const unfollowUser = asyncHandler(async (req, res) => {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currUser.updateOne({$pull: {following: req.params.id}});
                res.status(200).json("User has been unfollowed.");
            } else {
                res.status(403).json("You already unfollowed this user.")
            }     
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot unfollow yourself.")
    }
})

module.exports = {updateUser, deleteUser, getUser, followUser, unfollowUser};