const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Travel = require("../models/Travel");
const Country = require("../models/Country");
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
  console.log(req.body)
    const id = req.user.id
    // const {country} = req.body.reactSelect
    // console.log("eeeeeeeeeeeeeeeeeeeee", country)
    const { name, from, to, country } = req.body;
    try {
        const countryID = await Country.findOne({ name: country })
        const travel = await Travel.create({
            name: name,
            from: from,
            to: to,
            country: countryID._id
        })
        const user = await User.findByIdAndUpdate(id, { $addToSet: { my_travels: travel.id } })
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.json({ status: "No se ha creado correctamente." })
    }
})

//EDIT TRAVEL//
router.post('/edit/:id', isLoggedIn(), async (req, res) => {
    const { name, from, to, country } = req.body;
    console.log("SOY NAME", name)
    console.log("SOY FROM", from)
    console.log("SOY TO", to)
    console.log("SOY COUNTRY", country)
    const id = req.params.id
    try {
        const countryID = await Country.findOne({name:country})
        console.log(countryID)
        const travel = await Travel.findByIdAndUpdate(id) 
        if(travel){
            travel.name = name,
            travel.from = from,
            travel.to = to,
            travel.country = countryID,
            await travel.save()
            console.log(travel)
            return res.json(travel)
        } else {
            return res.json({ status: "No puedes cambiar el dato" })
        }
    } catch (error){
      console.log(error)
        return res.json(error)

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
    console.log(id)
    const travel = await Travel.findById(id).populate({ path: "country" })
    console.log(travel)    
    return res.json(travel)
  })

module.exports = router;
