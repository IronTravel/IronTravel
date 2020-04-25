const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const User = require("../models/User");


// Clear
router.get('/notifications/:id', isLoggedIn(), async (req, res) => {

    const userID = req.user.id

    //const user = await User.findById(userID).

    const followingPopulate = await User.findById(userID).populate({ path:"following" })
    return res.json(followingPopulate)
})

module.exports = router;
