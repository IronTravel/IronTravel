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


//HOBBY//
router.get('/hobbies', isLoggedIn(), async (req, res) => {
  const hobbies = await Hobby.find() 
  return res.json(hobbies.map(e => e.name))
})

//MUSICGENRE//
router.get('/musicgenres', isLoggedIn(), async (req, res) => {
  const musicgenres = await MusicGenre.find() 
  return res.json(musicgenres.map(e => e.name))
})

//PERSONALITY//
router.get('/personalities', isLoggedIn(), async (req, res) => {
  const personality = await Personality.find() 
  return res.json(personality.map(e => e.name))

})

//LIFESTYLE//
router.get('/lifestyles', isLoggedIn(), async (req, res) => {
  const lifestyle = await LifeStyle.find() 
  return res.json(lifestyle.map(e => e.name))
})

//AMENITIES//
router.get('/amenities', async (req, res) => {
  const amenity = await Amenity.find() 
  return res.json(amenity.map(e => e.name))
})

module.exports = router;
