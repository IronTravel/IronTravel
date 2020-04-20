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
        fullName: String,
        dob: {
            date: Date,
            age: Number
        },
        googleId: Number,
        spotifyId: Number,
        instagramId: Number,
        main_image: String,
        avatar: String,
        description: { type: String, default: "" },
        country: String,
        favourite_color: String,
        notifications: {
            date: Date,
            description: String,
            related_user: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        },
        followers: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        following: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        my_travels: [{ type: mongoose.Schema.ObjectId, ref: "travel" }],
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
