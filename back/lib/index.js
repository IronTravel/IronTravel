require("dotenv").config();

const querystring = require("querystring");
const { MongoError } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const axios = require("axios");

const salt = bcrypt.genSaltSync(10);
const DBURL = process.env.DBURL;

// -------------------------
// Hash Password
// -------------------------
const hashPassword = text => {
  return bcrypt.hashSync(text, salt);
};

// -------------------------
// Check Hashed Password
// -------------------------
const checkHashedPassword = bcrypt.compareSync;

// -------------------------
// Drop collection if already exists
// -------------------------
const dropIfExists = async Model => {
  try {
    await Model.collection.drop();
  } catch (e) {
    if (e instanceof MongoError) {
      console.log(
        `Cannot drop collection ${Model.collection.name}, because does not exist in DB`
      );
      return;
    }
  }
};

// -------------------------
// Woking with DB connection
// -------------------------
const withDbConnection = async (fn, disconnectEnd = true) => {
  try {
    await mongoose.connect(DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connection Ready on ${DBURL}`);
    await fn();
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  } finally {
    // Disconnect from database
    if (disconnectEnd) {
      await mongoose.disconnect();
      console.log("disconnected");
    }
  }
};

// -------------------------
// Get Spotify Token
// -------------------------
const getSpotityToken = async () => {
  const CLIENT_ID_SPOTIFY = process.env.CLIENT_ID_SPOTIFY;
  const CLIENT_SECRET_SPOTIFY = process.env.CLIENT_SECRET_SPOTIFY;

  return axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(`${CLIENT_ID_SPOTIFY}:${CLIENT_SECRET_SPOTIFY}`).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: querystring.stringify({ grant_type: "client_credentials" }),
    responseType: "json"
  }).catch(error => {
    console.log("ERROR: " + error);
  });
};

// -------------------------
// LoggedIn or not
// -------------------------
const isLoggedIn = (redirectRoute = "/login") => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    req.flash("Content is private, please login");
    return res.redirect(redirectRoute);
  }
};

const isLoggedOut = (redirectRoute = "/") => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    req.flash("You are already logged in");
    return res.redirect(redirectRoute);
  }
};

// -------------------------
// GETRANDOM FROM ARRAY
// -------------------------
const getRandom = (array, n, returnArrayOfIds) => {
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(array[Math.floor(Math.random() * array.length)]);
  }

  return returnArrayOfIds ? newArr.map(user => user._id) : newArr;
};

module.exports = {
  hashPassword,
  checkHashedPassword,
  withDbConnection,
  dropIfExists,
  getSpotityToken,
  isLoggedIn,
  isLoggedOut,
  getRandom
};