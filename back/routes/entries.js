const express = require("express");
const router = express.Router();

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Entry = require("../models/Entry");

//ALL ENTRIES//
// router.get('/', isLoggedIn(), async (req, res) => {
//     const entry = await Entry.find()
//     return res.json(entry)
// })

//GET USER ENTRIES//
router.get('/:userId', isLoggedIn(), async (req, res) => {
    const { userId } = req.params;
    const userEntries = await Entry.find({ author: userId })
        .populate([
            { path: "author" },
            { path: "likes" }
        ])

    return res.json(userEntries)
})

//CREATE ENTRY//
router.post("/", isLoggedIn(), async (req, res, next) => {

    const { body, is_public } = req.body;
    const newEntry = await Entry.create({
        author: req.user._id,
        body: body,
        type: 'text',
        hidden: is_public ? true : false
    });

    return res.json(newEntry)
});

//DELETE ENTRY//
router.get("/delete/:id", isLoggedIn(), async (req, res, next) => {

    const { id } = req.params;
    const entry = await Entry.findById(id);

    if (entry.author === req.user._id) {
        const entry = await Entry.findOneAndDelete({ _id: entry.id })
        return res.json(entry)
    } else {
        return res.status(401).json({ status: "You are not the post author. You can only delete your own entries." })
    }
});

module.exports = router;
