const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Hobby = require("../models/Hobby");
const MusicGenre = require("../models/MusicGenre");
const Personality = require("../models/Personality");
const LifeStyle = require("../models/LifeStyle");
const Amenity = require("../models/Amenity");
const User = require("../models/User")


//HOBBY//
router.get('/hobbies', isLoggedIn(), async (req, res) => {
  const hobbies = await Hobby.find() 
  return res.json(hobbies)
})

//MUSICGENRE//
router.get('/musicgenres', isLoggedIn(), async (req, res) => {
  const musicgenres = await MusicGenre.find() 
  return res.json(musicgenres)
})

//PERSONALITY//
router.get('/personalities', isLoggedIn(), async (req, res) => {
  const personality = await Personality.find() 
  return res.json(personality)

})

//LIFESTYLE//
router.get('/lifestyles', isLoggedIn(), async (req, res) => {
  const lifestyle = await LifeStyle.find() 
  return res.json(lifestyle)
})

//AMENITIES//
//All
router.get('/amenities', async (req, res) => {
  const amenity = await Amenity.find() 
  return res.json(amenity)
})
//Add
router.post('/amenities/add/:id',async(req, res) => {
  const id = req.params.id
  const idUser = req.user.id

  // await User.findByIdAndUpdate(idUser, {{ $addToSet: { "about_me.music": id } }})
  await User.findByIdAndUpdate(idUser,
    { $addToSet: { "about_me.music":id }}
  )
  return res.json({status:"added"})
} )
//Delete
router.get('/amenities/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { my_hobbies: id } },
    { safe: true, multi: true }
  );
  return res.json({status:"deleted"})
} )

module.exports = router;
