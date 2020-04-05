const express = require("express");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

//Models
const User = require("../models/User");

//Lib
const { isLoggedIn } = require('../lib/isLoggedIn');
const { hashPassword } = require("../lib/hashing");

//SIGNUP//
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ status: "debes rellenar todos los campos" });
  } else {
    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("user already exists");
      res.json({ status: "user already exists try again" });
    } else {
      const newUser = await User.create({
        email,
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
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(_.pick(req.user, ["_id", "email"]));
});

//LOGOUT//
router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "logout" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

//WHOAMI//
router.get('/whoami', isLoggedIn(), async (req, res) => {
  if (req.user)
      return res.json(req.user)
  else
      return res.status(401).json({ status: 'No user logged in' })
})


module.exports = router;
