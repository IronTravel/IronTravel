const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Travel = require("../models/Travel");
const User = require("../models/User");

//ALL TRAVELS//
router.get('/', isLoggedIn(), async (req, res) => {
    const { id } = req.user
    const user = await User.findById(id, { password: 0, __v: 0 })
        .populate({ path: "my_travels", populate: { path: "country" } })
    return res.json(user.my_travels)
})

//CREATE TRAVEL//
router.post('/create', isLoggedIn(), async (req, res) => {

    const { id } = req.user
    const { name, from, to, country } = req.body;

    try {
        const travel = await Travel.create({
            name: name,
            from: from,
            to: to,
            country: country.value
        })

        await User.findByIdAndUpdate(id, { $addToSet: { my_travels: travel._id } })
        const travels = await User.findById(id, { password: 0, __v: 0 })
            .populate('my_travels');

        return res.json(travels)

    } catch (error) {
        res.status(403).json({ status: 'No se ha creado correctamente' })
    }
})

//EDIT TRAVEL//
router.post('/edit/:id', isLoggedIn(), async (req, res) => {

    const { id } = req.params;
    const { name, from, to, country } = req.body;

    try {
        const travel = await Travel.findByIdAndUpdate(id)

        if (travel) {
            travel.name = name,
            travel.from = from,
            travel.to = to,
            travel.country = country.value,
            await travel.save()
            return res.json(travel)
        } else {
            return res.status(403).json({ status: "No puedes cambiar el dato" })
        }
    } catch (error) {
        return res.status(403).json(error)

    }
})

//DELETE TRAVEL//
router.get('/delete/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const userID = req.user.id

  await User.findByIdAndUpdate(
    userID,
    { $pull: { my_travels: id } },
    { safe: true, multi: true }
  );
    const travel = await Travel.findOneAndDelete({_id: id})
    console.log("eliminado correctamente")
    return res.json({status:`${id} eliminado`})
  })

//ONE TRAVEL//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const travel = await Travel.findById(id)
        .populate({ path: "country" })

    return res.json(travel)
})

module.exports = router;
