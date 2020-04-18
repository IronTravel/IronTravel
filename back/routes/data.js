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
//User Hobby
// router.get('/hobbies/user', isLoggedIn(), async (req, res) => {
//   const userFind = await User.findById(req.user.id) 
//   console.log(userFind.about_me.hobbies)
//   //return res.json(userFind.about_me.hobbies)
//   return res.json(userFind.about_me)
// })

// router.get('/aboutMe/user', isLoggedIn(), async (req, res) => {
//   console.log(req.user)
//   const userFind = await User.findById(req.user.id)
//   console.log("eeeeee", userFind.about_me.hobbies)
//   return res.json(userFind.about_me)
// })


router.get('/aboutMe/user', isLoggedIn(), async (req, res) => {
  const populate = await User.findById(req.user.id).populate([{ path: "hobbies" }, { path: "music"}, { path: "life_style" },{ path: "personality" }])
  return res.json(populate)
})



//Add
router.post('/hobbies/add',async(req, res) => {
  console.log(req.body.length)
if(req.body.length !== 0){
  console.log("hola")
  const user = req.user.id
  await User.findByIdAndUpdate(user, {hobbies: req.body})
  return res.json({status:"added"})
} else {
  console.log("adios")
  return res.json({status:"No has modificado nada"})
}
})

//Delete
router.get('/hobbies/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.findByIdAndUpdate(
    user,
    { $pull: { hobbies: id } },
    // { safe: true, multi: true }
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
router.post('/musicgenres/add',async(req, res) => {
  console.log(req.body.length)
if(req.body.length !== 0){
  console.log("hola")
  const user = req.user.id
  await User.findByIdAndUpdate(user, {music: req.body})
  return res.json({status:"added"})
} else {
  console.log("adios")
  return res.json({status:"No has modificado nada"})
}
})

//Delete
router.get('/musicgenres/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { music: id } },
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


router.post('/personalities/add',async(req, res) => {
  console.log(req.body.length)
if(req.body.length !== 0){
  console.log("hola")
  const user = req.user.id
  await User.findByIdAndUpdate(user, {personality: req.body})
  return res.json({status:"added"})
} else {
  console.log("adios")
  return res.json({status:"No has modificado nada"})
}
})


// //Add
// router.post('/personalities/add/:id',async(req, res) => {
//   const id = req.params.id
//   const idUser = req.user.id

//   await User.findByIdAndUpdate(idUser,
//     { $addToSet: { personality:id }}
//   )
//   return res.json({status:"added"})
// })

//Delete
router.get('/personalities/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { personality: id } },
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
router.post('/lifestyles/add',async(req, res) => {
  if(req.body.length !== 0){
    console.log("hola desde lifeStyles")
    const user = req.user.id
  await User.findByIdAndUpdate(user, {life_style: req.body})
  return res.json({status:"added"})
  }else{
    console.log("adios desde lifeStyles")
    return res.json({status:"No has modificado nada"})
  }
})

//Delete
router.get('/lifestyles/delete/:id',async(req, res) => {
  const id = req.params.id
  const user = req.user
  await User.updateOne(
    user,
    { $pull: { life_style: id } },
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
