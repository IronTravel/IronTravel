const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();
const { hashPassword } = require("../lib/hashing");
const _ = require("lodash");

//SIGNUP//
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log("este es el email", email);
  console.log("esta es la password", password);
  if (!email || !password) {
    res.json({ status: "debes rellenar todos los campos" });
  } else {
    // console.log(email);
    const userExist = await User.findOne({ email });
    // console.log(userExist);
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

module.exports = router;
