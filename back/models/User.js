const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    password: String,
    email: String,
    gender: {
      type: String,
      enum: ["Male", "Female"]
    },
    name: String,
    lastName: String,
    initials: String,
    dob: {
      date: Date,
      age: Number
    },
    avatar: String,
    description: String,
    nationality: String,
    favourite_color: String,
    my_hobbies: [{ type: ObjectId, ref: "hobby" }],
    my_travels: [{ type: ObjectId, ref: "travelProfile" }],
    my_tours: [{ type: ObjectId, ref: "tour" }],
    my_places: [{ type: ObjectId, ref: "place" }],
    about_me: {
      music: [{ type: ObjectId, ref: "musicGenres" }],
      personality: [{ type: ObjectId, ref: "personality" }],
      life_style: [{ type: ObjectId, ref: "lifeStyle" }]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", User);
