const express = require("express");
const router = express.Router();
const { registerUser, loginUser} = require("../controllers/authController");

//register
router.route('/register').post(registerUser);

//login
router.route('/login').post(loginUser);

module.exports = router;