const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn, hashPassword,checkHashedPassword } = require('../lib')

//Models
const User = require("../models/User");


//ALL USERS//
router.get('/', isLoggedIn(), async (req, res) => {
  const users = await User.find() 
  return res.json(users)
})

// //ONE USER//
// router.get('/:id', isLoggedIn(), async (req, res) => {
//     const id = req.params.id
//     const user = await User.findById(id)
//     return res.json(user)
//   })


//CHANGE USER PASSWORD
router.post('/update-password', isLoggedIn(), async (req, res) => {
  const { password, newPassword } = req.body;
  const id = req.user.id
  try {
    const user = await User.findById(id)
    if (user) {
      
      if(checkHashedPassword(password, user.password) === true){
        console.log("hola")
        user.password = hashPassword(newPassword)
        await user.save()
        return res.json({status:"password Changed"})
      } else {
        console.log("adios")
        return res.json({status:"The old password is not correct"})
      }
    } else { 
      return res.json({status:"Usuario inexistente"})
    }
  } catch (error){
    console.log(error)
    return res.json(error)
  }

})

//EDIT ONE USER//
router.post('/edit', isLoggedIn(), async (req, res) => {
    const { email, name, lastName } = req.body;
    const id = req.user.id

    try {
        const user = await User.findById(id)
        console.log(user)
        if(user){
            user.email = email
            user.name = name
            user.lastName = lastName
            await user.save()
            return res.json(_.pick(req.user, ["email", "name", "lastName"]))
        } else {
            return res.json({status:"No puedes cambiar el dato"})
        }
    } catch (error){
        return res.json(error)
    }

  })

module.exports = router;