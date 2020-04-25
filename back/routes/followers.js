const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const User = require("../models/User");

//ALL user Followers
router.get('/followers/', isLoggedIn(), async (req, res) => {
    const userID = req.user.id
    const followers = await User.findById(userID)
    const followersPopulate = await User.findById(userID).populate({ path:"followers" })
    return res.json(followersPopulate)
})

//ALL user Following
router.get('/following/', isLoggedIn(), async (req, res) => {
    const userID = req.user.id
    const following = await User.findById(userID)
    const followingPopulate = await User.findById(userID).populate({ path:"following" })
    return res.json(followingPopulate)
})

//ADD Follow
router.post('/addFollow/:id', isLoggedIn(), async (req, res)=> {

    const userID = req.user.id
    const followID = req.params.id

    try {
        const addToPendings = await User.findByIdAndUpdate(userID, {
            $addToSet: {
                pendings: {
                    type: 'follow',
                    related_user: followID
                }
            }
        })

        const addToNotifications = await User.findByIdAndUpdate(followID,
            {
                $addToSet: {
                    notifications: {
                        type: 'follow',
                        related_user: userID
                    }
                }
            })

        const user = await User.findById(userID)
            .populate([
                { path: "following" },
                {
                    path: 'pages', populate: {
                        path: 'related_user',
                        model: 'User'
                    }
                }])

        console.log(user);

        return res.json(user)

    } catch (error) {
        return res.json({status:"No se ha creado correctamente."})
    }
})
//DELETE Follow
router.get('/deleteFollow/:id', isLoggedIn(), async (req, res) => {
    const userID = req.user.id
    const followID = req.params.id

    const Deluser = await User.findByIdAndUpdate(
        userID,
        { $pull: { following: followID } },
        { safe: true, multi: true }
      ).populate({ path:"following" })
      console.log(`se ha eliminado el following ${followID} de ${userID}`)
    const deleteFollow = await User.findByIdAndUpdate(
        followID,
        { $pull: { followers: userID } },
        { safe: true, multi: true }
        )
        const user = await User.findById(userID).populate({ path:"following" })
        console.log(`se ha eliminado el followers ${userID} de ${followID}`)
      console.log("Respuesta de eliiminar ",user)
      console.log("eliminado correctamente")
        return res.json(user)
})

module.exports = router;
