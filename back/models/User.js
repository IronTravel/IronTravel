const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    password: String,
    email: String,
    gender: {
      type: String,
      enum: ["male", "female"]
    },
    name: String,
    lastName: String,
    initials: String,
    dob: {
      date: Date,
      age: Number
    },
    googleId: Number,
    avatar: String,
    about: String,
    nationality: String,
    favourite_color: String,
    my_travels: [{ type: mongoose.Schema.ObjectId, ref: "travelProfile" }],
    my_tours: [{ type: mongoose.Schema.ObjectId, ref: "tour" }],
    my_places: [{ type: mongoose.Schema.ObjectId, ref: "place" }],
    music: [{ type: mongoose.Schema.ObjectId, ref: "musicGenres" }],
    hobbies: [{ type: mongoose.Schema.ObjectId, ref: "hobby" }],
    personality: [{ type: mongoose.Schema.ObjectId, ref: "personality" }],
    life_style: [{ type: mongoose.Schema.ObjectId, ref: "lifeStyle" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", User);
