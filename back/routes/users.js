const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn, hashPassword, checkHashedPassword } = require('../lib');

//Models
const User = require("../models/User");

//ALL USERS//
router.get('/', isLoggedIn(), async (req, res) => {
    const { id } = req.user;
    const users = await User.find({ _id: { $ne: id } })
        .populate([
            { path: "personality" },
            { path: "life_style" },
            { path: "hobbies" }
        ]);

    return res.json(users);
})

//GET USER//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
        .populate([
            { path: "personality" },
            { path: "life_style" },
            { path: "hobbies" }
        ]);

    return res.json(user);
})

//CHANGE USER PASSWORD
router.post('/update-password', isLoggedIn(), async (req, res) => {
    const { password, newPassword } = req.body;
    const id = req.user.id;

    try {
        const user = await User.findById(id);

        if (user) {
            if (checkHashedPassword(password, user.password) === true) {
                console.log("hola");
                user.password = hashPassword(newPassword);
                await user.save();
                return res.json({ status: "password Changed" });
            } else {
                console.log("adios");
                return res.json({ status: "The old password is not correct" });
            }
        } else {
            return res.json({ status: "Usuario inexistente" });
        }
    } catch (error) {
        console.log(error);
        return res.json(error);
    }

})

//EDIT ONE USER//
router.post('/edit', isLoggedIn(), async (req, res) => {
    const { email, name, lastName, description, gender, birthday } = req.body;
    console.log(description);
    const id = req.user.id;

    try {
        const user = await User.findById(id)
            .populate([
                { path: "personality" },
                { path: "life_style" },
                { path: "hobbies" }
            ]);

        if (user) {
            console.log(user.description, "antes");
            user.email = email
            user.name = name
            user.lastName = lastName
            user.fullName = `${name} ${lastName}`
            user.description = description
            user.gender = gender
            user.dob.date = birthday
            console.log(user.description, "ahora");
            await user.save();
            return res.json(user);
        } else {
            return res.json({ status: "You cant change" });
        }
    } catch (error) {
        console.log(error);
        return res.json(error);
    }

})

module.exports = router;