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
//All
router.get('/hobbies', isLoggedIn(), async (req, res) => {
  const hobbies = await Hobby.find() 
  return res.json(hobbies)
})

//Add
router.post('/hobbies/add/:id',async(req, res) => {
  const id = req.params.id
  const idUser = req.user.id

  await User.findByIdAndUpdate(idUser,
    { $addToSet: { "about_me.hobbies":id }}
  )
  return res.json({status:"added"})
})

//Delete
router.get('/hobbies/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { "about_me.hobbies": id } },
    { safe: true, multi: true }
  );
  return res.json({status:"deleted"})
} )

//MUSICGENRE//
//All
router.get('/musicgenres', isLoggedIn(), async (req, res) => {
  const musicgenres = await MusicGenre.find() 
  return res.json(musicgenres)
})

//Add
router.post('/musicgenres/add/:id',async(req, res) => {
  const id = req.params.id
  const idUser = req.user.id

  await User.findByIdAndUpdate(idUser,
    { $addToSet: { "about_me.music":id }}
  )
  return res.json({status:"added"})
})

//Delete
router.get('/musicgenres/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { "about_me.music": id } },
    { safe: true, multi: true }
  );
  return res.json({status:"deleted"})
} )

//PERSONALITY//
//All
router.get('/personalities', isLoggedIn(), async (req, res) => {
  const personality = await Personality.find() 
  return res.json(personality)
})

//Add
router.post('/personalities/add/:id',async(req, res) => {
  const id = req.params.id
  const idUser = req.user.id

  await User.findByIdAndUpdate(idUser,
    { $addToSet: { "about_me.personality":id }}
  )
  return res.json({status:"added"})
})

//Delete
router.get('/personalities/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { "about_me.personality": id } },
    { safe: true, multi: true }
  );
  return res.json({status:"deleted"})
} )

//LIFESTYLE//
//All
router.get('/lifestyles', isLoggedIn(), async (req, res) => {
  const lifestyle = await LifeStyle.find() 
  return res.json(lifestyle)
})

//Add
router.post('/lifestyles/add/:id',async(req, res) => {
  const id = req.params.id
  const idUser = req.user.id

  await User.findByIdAndUpdate(idUser,
    { $addToSet: { "about_me.life_style":id }}
  )
  return res.json({status:"added"})
})

//Delete
router.get('/lifestyles/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { "about_me.life_style": id } },
    { safe: true, multi: true }
  );
  return res.json({status:"deleted"})
} )

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

  await User.findByIdAndUpdate(idUser,
    { $addToSet: { amenities: id }}
  )
  return res.json({status:"added"})
} )

//Delete
router.get('/amenities/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { amenities: id } },
    { safe: true, multi: true }
  );
  return res.json({status:"deleted"})
} )

module.exports = router;
