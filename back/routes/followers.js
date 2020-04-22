const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const User = require("../models/User");

//ALL user Followers
router.get('/', isLoggedIn(), async (req, res) => {
    const userID = req.user.id    
    const followers = await User.findById(userID)
    const followersPopulate = await User.findById(userID).populate({ path:"followers" })
    return res.json(followersPopulate)
})
//ADD Follow
router.post('/addFollow/:id', isLoggedIn(), async (req, res)=> {
    const userID = req.user.id
    const followID = req.params.id


    try {
        const user = await User.findByIdAndUpdate(userID,
            { $addToSet: { followers: followID}}).populate({ path:"followers" })
            console.log("se ha creado")
            console.log(user)
        return res.json(user)
    } catch (error){
        console.log(error)
        console.log("no se ha creado")
        return res.json({status:"No se ha creado correctamente."})
    }
})
//DELETE Follow
router.get('/deleteFollow/:id', isLoggedIn(), async (req, res) => {
    const userID = req.user.id
    const followID = req.params.id

    const user = await User.findByIdAndUpdate(
        userID,
        { $pull: { followers: followID } },
        { safe: true, multi: true }
      ).populate({ path:"followers" })
      console.log(user)
      console.log("eliminado correctamente")
        return res.json(user)
})

module.exports = router;
