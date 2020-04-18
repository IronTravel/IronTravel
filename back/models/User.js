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
        description: {type: String, default: ""},
        nationality: String,
        favourite_color: String,
        followers: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        following: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        my_travels: [{ type: mongoose.Schema.ObjectId, ref: "travelProfile" }],
        my_tours: [{ type: mongoose.Schema.ObjectId, ref: "tour" }],
        my_places: [{ type: mongoose.Schema.ObjectId, ref: "place" }],
        music: [{ type: mongoose.Schema.ObjectId, ref: "musicGenres" }],
        personality: [{ type: mongoose.Schema.ObjectId, ref: "personality" }],
        life_style: [{ type: mongoose.Schema.ObjectId, ref: "lifeStyle" }],
        hobbies: [{ type: mongoose.Schema.ObjectId, ref: "hobby" }],
    },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", User);
