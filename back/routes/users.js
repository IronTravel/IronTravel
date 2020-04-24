const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn, hashPassword, checkHashedPassword, uploadCloudinaryAvatar } = require('../lib')

//Models
const User = require("../models/User");

//ALL USERS//
router.get('/', isLoggedIn(), async (req, res) => {
    const { id } = req.user;
    const users = await User.find({ _id: { $ne: id } }, { password: 0, __v: 0 })
        .populate([
            { path: "personality" },
            { path: "life_style" },
            { path: "hobbies" }
        ]);

    return res.json(users);
})

//MATCH USERS//
router.get('/matches', isLoggedIn(), async (req, res) => {
    const { id } = req.user;
    let users = await User.find({}, { password: 0, __v: 0 })
        .populate([
            { path: "personality" },
            { path: "life_style" },
            { path: "hobbies" },
            { path: "music" }
        ]);

    const currentUser = _.remove(users, (user) => user._id.toString() == id).pop();
    users.forEach(user => {
        user.factor = matchFactor(user, currentUser)
        user.factorTotal = _.sum(matchFactor(user, currentUser))
    })

    return res.json(users);
})

function matchFactor(user, currentUser) {
    return ['music', 'life_style', 'hobbies', 'personality'].map((item, idx) => {
        let userItem = user[item] ? user[item].map(i => i.name) : []
        let currentUserItem = currentUser[item] ? currentUser[item].map(i => i.name) : []
        return _.intersection(userItem, currentUserItem).length * idx
    })
}

//GET USER//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id, { password: 0, __v: 0 })
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
        const user = await User.findById(id)
        .populate([
            { path: "personality" },
            { path: "life_style" },
            { path: "hobbies" }
        ]);;

        if (user) {
            if (checkHashedPassword(password, user.password) === true) {
                user.password = hashPassword(newPassword);
                await user.save();
                return res.json({status:"Password changed", user});
            } else {
                return res.json({status:"Old password incorrect", user});
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
            //user.fullName = `${name} ${lastName}`
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

//cambiar avatar
router.post("/image", isLoggedIn(), uploadCloudinaryAvatar.single("avatar"), async (req, res) => {
    const id = req.user.id
    try {
        const user = await User.findById(id);
        user.avatar = req.file.url
        await user.save()
        return res.json({ status: "Upload completed", user: user })
    } catch (error) {
        console.log(error)
    }
}
)

module.exports = router;