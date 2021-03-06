const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn, uploadCloudinaryAvatar } = require('../lib');

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
    const tour = await Tour.create({
        name:name,
        tour_type:type,
        city:city,
        country:country.value,
        start_date: start, 
        end_date:end,
        description:description
    })
  await User.findByIdAndUpdate(id, {$addToSet: {my_tours: tour.id}})
  const tours = await User.findById(id, { password: 0, __v: 0 })
  .populate('my_tours');
  
  
  
  return res.json(user)
  } catch (error ){
    console.log(error)
    return res.json({status:"No se ha creado correctamente."})
  }
})

//EDIT TOUR//
router.post('/edit/:id', isLoggedIn(), async (req, res) => {
  const { name, type, city, country, description, end, start } = req.body;
    const id = req.params.id
    try {
        const tour = await Tour.findByIdAndUpdate(id) 
        if(tour){
          tour.name = name,
          tour.tour_type=type,
          tour.city = city,
          tour.country = countryID._id,
          tour.start_date = start, 
          tour.end_date = end,
          tour.description = description
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
    const userID = req.user.id

    await User.findByIdAndUpdate(
      userID,
      { $pull: { my_tours: id } },
      { safe: true, multi: true }
    );

    const tour = await Tour.findOneAndDelete({_id: id})
    console.log("eliminado correctamente")
    return res.json({status:`${id} eliminado`})
  })

//UPDATE IMAGE TOUR//
router.post("/image/:id", isLoggedIn(), uploadCloudinaryAvatar.single("avatar"), async (req, res) => {
  const id = req.params.id
  console.log(id)
  try {
      const tour = await Tour.findById(id);
      tour.photos = req.file.url
      await tour.save()
      return res.json(tour)
  } catch (error) {
      console.log(error)
  }
}
)

//ONE TOUR//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const tour = await Tour.findById(id).populate({ path: "country" })
    console.log(tour)   
    return res.json(tour)
  })


  
module.exports = router;
