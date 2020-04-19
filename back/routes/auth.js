const express = require("express");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

//Models
const User = require("../models/User");

//Lib
const { isLoggedIn, isLoggedOut } = require('../lib');
const { hashPassword } = require("../lib");

//SIGNUP//
router.post("/signup", isLoggedOut(), async (req, res) => {
    const { username, password, name, lastname } = req.body;
    const email = username
    if (!username || !password) {
        return res.status(422).json({ status: 'E-mail and Password required' })
    } else {
        const userExist = await User.findOne({ email });
        if (userExist) {
            console.log("user already exists");
            return res.status(409).json({ status: 'E-mail already exists. Please try with a different one.' })
        } else {
            const newUser = await User.create({
                name: name,
                lastName: lastname,
                email: email,
                password: hashPassword(password),
            });

            //AUTO LOGIN//
            req.logIn(newUser, (error) => {
                res.json(_.pick(req.user, ["_id", "email"]));
            });
        }
    }
});

//LOGIN//
router.post("/login", isLoggedOut(), passport.authenticate("local"), (req, res) => {
    res.json(_.pick(req.user, ["_id", "email"]));
});

//LOGIN GOOGLE//
router.get(
    "/google/login",
    isLoggedOut(),
    passport.authenticate("google", { scope: ["profile email"] })
);
router.get(
    "/google/callback",
    isLoggedOut(),
    passport.authenticate("google", {
        failureRedirect: `${process.env.FRONT_URL}/login`,
    }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect(`${process.env.FRONT_URL}/profile`);
    }
);

//LOGOUT//
router.post("/logout", isLoggedIn(), (req, res) => {
    if (req.user) {
        req.logout();
        console.log("logout")
        return res.json({ status: "logout" });
    } else {
        console.log("You have to be logged in to logout")
        return res
            .status(401)
            .json({ status: "You have to be logged in to logout" });
    }
});

//WHOAMI//
router.get('/whoami', isLoggedIn(), async (req, res) => {
    if (req.user) {
        //console.log(req.user)
        return res.json(req.user)
    } else {
        //console.log("No user login", req.user)
        return res.status(401).json({ status: 'No user logged in' })
    }
})


module.exports = router;
