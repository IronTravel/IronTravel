const mongoose = require("mongoose");
const Tour = new mongoose.Schema(
    {
        name: String,
        description: String,
        tour_type: String,
        city: String,
        country: String,
        tour_partner: { type: mongoose.Schema.ObjectId, ref: "user" },
        organizer: { type: ObjectId, ref: "user" },
        start_date: Date,
        end_date: Date,
        photos: Array,
        start_place: String,
        number_of_people: Number,
        duration: Date,
        rating: Number
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("tour", Tour);
