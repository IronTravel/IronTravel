const mongoose = require("mongoose");

const Tour = new mongoose.Schema(
    {
        name: String,
        description: String,
        tour_type: String,
        city: String,
        country: { type: mongoose.Schema.ObjectId, ref: "country" },
        tour_partner: { type: mongoose.Schema.ObjectId, ref: "user" },
        organizer: { type: mongoose.Schema.ObjectId, ref: "user" },
        start_date: Date,
        end_date: Date,
        photos: {type: Array, default: ["https://viajes.nationalgeographic.com.es/medio/2017/04/24/bora-bora-islas-de-la-sociedad_6007a5de.jpg"] },
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
