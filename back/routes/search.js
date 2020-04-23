const express = require("express");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

//Models
const City = require("../models/City");

//Lib
const { isLoggedIn, isLoggedOut } = require('../lib');
const { hashPassword } = require("../lib");


router.post("/",isLoggedIn(), async (req, res) => {
    const {data} = req.body
    console.log(data)
    const found = await City.find( { $and: [ { $or: [{name: { $regex: data, $options: "i" } },{country: { $regex: data, $options: "i" }} ] } ] } )
    .populate([
        { path: "restaurant" },
        { path: "museum" },
        { path: "landmark" }
    ]);
    console.log(found)
    return res.json(found)

})

module.exports = router;


