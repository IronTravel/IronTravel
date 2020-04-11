const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Travel = require("../models/Travel");


//ALL TRAVELS//
router.get('/', isLoggedIn(), async (req, res) => {
    const travel = await Travel.find() 
    return res.json(travel)
  })

//CREATE TRAVEL//
router.post('/create', isLoggedIn(), async (req, res) => {
    const { city } = req.body;
    const travel = await Travel.create({city})
    return res.json(travel)
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