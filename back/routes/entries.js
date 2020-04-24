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

    console.log(req.body);
    const { entry, is_public } = req.body;
    let newEntry = await Entry.create({
        type: 'text',
        author: req.user._id,
        body: entry,
        hidden: is_public ? true : false
    })
    newEntry = await newEntry.populate('author').execPopulate()

    return res.json(newEntry)
});

//DELETE ENTRY//
router.get("/delete/:id", isLoggedIn(), async (req, res, next) => {

    const { id } = req.params;
    const entry = await Entry.findById(id);

    if (entry.author.toString() === req.user._id.toString()) {
        await Entry.findOneAndDelete({ _id: entry._id });
        const entries = await Entry.find({ author: req.user._id })
            .populate([
                { path: "author" },
                { path: "likes" }
            ]);

        console.log(entries)

        return res.json(entries);

    } else {
        return res.status(401).json({ status: "You are not the post author. You can only delete your own entries." });
    }
});

module.exports = router;
