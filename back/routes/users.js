const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn, hashPassword } = require('../lib');

//Models
const User = require("../models/User");


//ALL USERS//
router.get('/', isLoggedIn(), async (req, res) => {
  const users = await User.find() 
  return res.json(users)
})

//ONE USER//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    return res.json(user)
  })

//EDIT ONE USER//
router.post('/edit/:id', isLoggedIn(), async (req, res) => {
    const { email, name, lastName , password} = req.body;
    const id = req.params.id
    if (password){
      try {
        const user = await User.findById(id)
        if(user) {
          user.password = hashPassword(password)
          await user.save()
          return res.json({status:"change pass"})
        } else {
          return res.json({status:"Not possible"})
        }
      } catch (error){
      return res.json(error)
      }
    } else {
    
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
  }
  })

module.exports = router;