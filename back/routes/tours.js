const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Tour = require("../models/Tour");
const Country = require("../models/Country");
const User = require("../models/User");

//ALL TOURS//
router.get('/', isLoggedIn(), async (req, res) => {
  const id = req.user.id  
   const tours = await User.findById(id).populate({ path: "my_tours" , populate: {path: "country"}})
  return res.json(tours)
  })

//CREATE TOUR//
router.post('/create', isLoggedIn(), async (req, res) => {
  const id = req.user.id
  const { name, type, city, country, description, end, start } = req.body;
  try {
    const countryID = await Country.findOne({name:country})
    const tour = await Tour.create({
        name:name,
        tour_type:type,
        city:city,
        country:countryID._id,
        start_date: start, 
        end_date:end,
        description:description
    })
  const user = await User.findByIdAndUpdate(id, {$addToSet: {my_tours: tour.id}})
  return res.json(user)
  } catch (error ){
    console.log(error)
    return res.json({status:"No se ha creado correctamente."})
  }
})

//EDIT TOUR//
router.post('/edit/:id', isLoggedIn(), async (req, res) => {
    const { city } = req.body;
    const id = req.params.id
    try {
        const tour = await Tour.findById(id) 
        if(tour){
            tour.city = city
            await tour.save()
            return res.json(tour)
        } else {
            return res.json({status:"No puedes cambiar el dato"})
        }
    } catch (error){
        return res.json(error)

    }
  })

//DELETE TOUR//
router.get('/delete/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    console.log(id)
    const tour = await Tour.findOneAndDelete({_id: id})

    return res.json({status:`${id} eliminado`, tour})
  })

//ONE TOUR//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const tour = await Tour.findById(id)    
    return res.json(tour)
  })

  
module.exports = router;
