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


router.get('/aboutMe/random', isLoggedIn(), async(req, res) => {
  const populate = await User.findById(req.user.id).populate([{ path: "hobbies" }, { path: "music"}, { path: "life_style" },{ path: "personality" }])
    
  // const musics = populate.music.map(e => e.name)
    const hobbies = populate.hobbies.map(e => e.name)
    const personalities = populate.personality.map(e => e.name)
    const life_styles = populate.life_style.map(e => e.name)

    // const randomMusic = musics[Math.floor(Math.random() * musics.length)];
    const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    const randomPersonality = personalities[Math.floor(Math.random() * personalities.length)];
    const randomLifeStyle = life_styles[Math.floor(Math.random() * life_styles.length)];
    const finalRandom = []
    finalRandom.push(randomHobby,randomPersonality ,randomLifeStyle)
    return res.json(finalRandom)
})


//List Populate all aboutMe
router.get('/aboutMe/user', isLoggedIn(), async (req, res) => {
  const populate = await User.findById(req.user.id).populate([{ path: "hobbies" }, { path: "music"}, { path: "life_style" },{ path: "personality" }])
  return res.json(populate)
})

//HOBBY//
//All
router.get('/hobbies', isLoggedIn(), async (req, res) => {
  const hobbies = await Hobby.find() 
  return res.json(hobbies)
})

//Add
router.post('/hobbies/add',async(req, res) => {
  const user = req.user.id
  await User.findByIdAndUpdate(user, {hobbies: req.body})
  return res.json({status:"added"})
})

//Delete
// router.get('/hobbies/delete/:id',async(req, res) => {
//   const id = req.params.id
//   const user = req.user
//   await User.findByIdAndUpdate(
//     user,
//     { $pull: { hobbies: id } },
//     // { safe: true, multi: true }
//   );
//   return res.json({status:"deleted"})
// } )

//MUSICGENRE//
//All
router.get('/musicgenres', isLoggedIn(), async (req, res) => {
  const musicgenres = await MusicGenre.find() 
  return res.json(musicgenres)
})

//Add
router.post('/musicgenres/add',async(req, res) => {
  const user = req.user.id
  await User.findByIdAndUpdate(user, {music: req.body})
  return res.json({status:"added"})
})

//Delete
// router.get('/musicgenres/delete/:id',async(req, res) => {
//   const id = req.params.id
//   const user = req.user
//   await User.updateOne(
//     user,
//     { $pull: { music: id } },
//     { safe: true, multi: true }
//   );
//   return res.json({status:"deleted"})
// } )

//PERSONALITY//
//All
router.get('/personalities', isLoggedIn(), async (req, res) => {
  const personality = await Personality.find() 
  return res.json(personality)
})

//Add
router.post('/personalities/add',async(req, res) => {
  const user = req.user.id
  await User.findByIdAndUpdate(user, {personality: req.body})
  return res.json({status:"added"})

})
//Delete
// router.get('/personalities/delete/:id',async(req, res) => {
//   const id = req.params.id
//   const user = req.user
//   await User.updateOne(
//     user,
//     { $pull: { personality: id } },
//     { safe: true, multi: true }
//   );
//   return res.json({status:"deleted"})
// } )

//LIFESTYLE//
//All
router.get('/lifestyles', isLoggedIn(), async (req, res) => {
  const lifestyle = await LifeStyle.find() 
  return res.json(lifestyle)
})

//Add
router.post('/lifestyles/add',async(req, res) => {
  const user = req.user.id
  await User.findByIdAndUpdate(user, {life_style: req.body})
  return res.json({status:"added"})
})

//Delete
// router.get('/lifestyles/delete/:id',async(req, res) => {
//   const id = req.params.id
//   const user = req.user
//   await User.updateOne(
//     user,
//     { $pull: { life_style: id } },
//     { safe: true, multi: true }
//   );
//   return res.json({status:"deleted"})
// } )

//AMENITIES//
//All
router.get('/amenities', async (req, res) => {
  const amenity = await Amenity.find() 
  return res.json(amenity)
})

//Add
router.post('/amenities/add',async(req, res) => {
  const user = req.user.id
  await User.findByIdAndUpdate(user, {amenities: req.body})
  return res.json({status:"added"})
})
//Delete
// router.get('/amenities/delete/:id',async(req, res) => {
//   const id = req.params.id
//   const user = req.user
//   await User.updateOne(
//     user,
//     { $pull: { amenities: id } },
//     { safe: true, multi: true }
//   );
//   return res.json({status:"deleted"})
// } )

module.exports = router;
