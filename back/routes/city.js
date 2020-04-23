const express = require("express");
const router = express.Router();
const _ = require("lodash");

//Lib
const { isLoggedIn } = require('../lib');

//Models

const City = require("../models/City")

router.get('/:id', isLoggedIn(), async (req, res) => {
    const id = req.params.id
    const city = await City.findById(id)
    .populate([
      { path: "museum" },
  ]);
    console.log(city)   
    return res.json(city)
  })

module.exports = router;