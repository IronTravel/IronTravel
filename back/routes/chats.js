const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models
const Chat = require("../models/Chat");

//ALL CHATS//
router.get('/', isLoggedIn(), async (req, res) => {
    const chat = await Chat.find() 
    return res.json(chat)
  })

//CREATE CHAT//
router.post('/create', isLoggedIn(), async (req, res) => {
    const { city } = req.body;
    const chat = await Chat.create({city})
    return res.json(chat)
  })

//DELETE CHAT//
router.get('/delete/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    console.log(id)
    const chat = await Chat.findOneAndDelete(id)

    return res.json({status:`${id} eliminado`, chat})
  })

//ONE CHAT//
router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const chat = await Chat.findById(id)    
    return res.json(chat)
  })

  
module.exports = router;