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
  const id = req.user.id  
  // const travels = await User.findById(id).populate({ path: "my_travels" }.populate({path: "country"}))
    const travels = await User.findById(id).populate({ path: "my_travels" , populate: {path: "country"}})  
  console.log(travels)
  return res.json(travels)
  })

//CREATE TRAVEL//
router.post('/create', isLoggedIn(), async (req, res) => {
    const id = req.user.id
    const { name, from, to, country } = req.body;
    try {
      const countryID = await Country.findOne({name:country})
      console.log(countryID.id)
      console.log(countryID._id)
      const travel = await Travel.create({
          name:name,
          from:from,
          to:to,
          country:countryID._id
      })
    const user = await User.findByIdAndUpdate(id, {$addToSet: {my_travels: travel.id}})
    return res.json(user)
    } catch (error ){
      console.log(error)
      return res.json({status:"No se ha creado correctamente."})
    }
  })

//EDIT TRAVEL//
router.post('/edit/:id', isLoggedIn(), async (req, res) => {
    const { city } = req.body;
    const id = req.params.id
    try {
        const travel = await Travel.findById(id) 
        if(travel){
            travel.city = city
            await travel.save()
            return res.json(travel)
        } else {
            return res.json({status:"No puedes cambiar el dato"})
        }
    } catch (error){
        return res.json(error)

    }
  })

//DELETE TRAVEL//
router.get('/delete/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    console.log(id)
    const travel = await Travel.findOneAndDelete({_id: id})
     
    return res.json({status:`${id} eliminado`, travel})
  })

//ONE TRAVEL//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const travel = await Travel.findById(id)    
    return res.json(travel)
  })

module.exports = router;
