const mongoose = require("mongoose");
const User = new mongoose.Schema(
    {
        password: String,
        email: String,
        gender: {
            type: String,
            enum: ["male", "female", "other"]
        },
        name: String,
        lastName: String,
        initials: String,
        dob: {
            date: Date,
            age: Number
        },
        googleId: Number,
        main_image: {
            type: Array,
            default: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },
        avatar: String,
        description: String,
        country: String,
        favourite_color: String,
        notifications: [{
            date: { type: Date, default: Date.now },
            description: String,
            type: {
                type: String,
                enum: ["follow", "like"]
            },
            related_user: { type: mongoose.Schema.ObjectId, ref: "user" }
        }],
        pendings: [{
            date: { type: Date, default: Date.now },
            description: String,
            type: {
                type: String,
                enum: ["follow"]
            },
            related_user: { type: mongoose.Schema.ObjectId, ref: "user" }
        }],
        factor: Array,
        factorTotal: Number,
        followers: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        following: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        my_travels: [{ type: mongoose.Schema.ObjectId, ref: "travel" }],
        my_tours: [{ type: mongoose.Schema.ObjectId, ref: "tour" }],
        my_places: [{ type: mongoose.Schema.ObjectId, ref: "place" }],
        music: [{ type: mongoose.Schema.ObjectId, ref: "musicGenre" }],
        personality: [{ type: mongoose.Schema.ObjectId, ref: "personality" }],
        life_style: [{ type: mongoose.Schema.ObjectId, ref: "lifeStyle" }],
        hobbies: [{ type: mongoose.Schema.ObjectId, ref: "hobby" }],
        spotify: {
            user_id: String,
            token: String
        },
        instagram: {
            user_id: String,
            token: String
        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

User.virtual('fullName').get(function () {
    return this.name.split(' ')[0] + ' ' + this.lastName.split(' ')[0];
});

module.exports = mongoose.model("user", User);

