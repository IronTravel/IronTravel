const mongoose = require("mongoose");
const Amenity = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("amenity", Amenity);
