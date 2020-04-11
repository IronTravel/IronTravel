const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Tour = require("../models/Tour");

//ALL TOURS//
router.get('/', isLoggedIn(), async (req, res) => {
    const tour = await Tour.find() 
    return res.json(tour)
  })

//CREATE TOUR//
router.post('/create', isLoggedIn(), async (req, res) => {
    const { city } = req.body;
    const tour = await Tour.create({city})
    return res.json(tour)
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
    const tour = await Tour.findOneAndDelete(id)

    return res.json({status:`${id} eliminado`, tour})
  })

//ONE TOUR//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const tour = await Tour.findById(id)    
    return res.json(tour)
  })

  
module.exports = router;