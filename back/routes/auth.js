const express = require ("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();
const { hashPassword } = require("../lib/hashing")
const _ = require("lodash")

//SIGNUP//
router.post("/signup", async (req, res) => {
    const {email, password} = req.body;
    const newUser = await User.create({
        email, 
        password: hashPassword(password)
    });

    req.logIn(newUser, error => {
        res.json(
            _.pick(req.user, [
                "_id",
                "email"
            ])
            
        )
    })
    console.log("usuario creado correctamente en db")
    res.json({status:"usuario creado correctamente en db"})
})

//LOGIN//
router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.user)
    console.log("hola")
    res.json(
        _.pick(req.user, [
            "_id",
            "email"
        ])
        
    )
})

//LOGOUT//
router.post("/logout", (req, res) => {
    if(req.user){
        req.logout();
        return res.json({status:"logout"})
    } else {
        return res
        .status(401)
        .json({status:"You have to be logged in to logout"})
    }
})

module.exports = router;