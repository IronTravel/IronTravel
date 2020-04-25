const mongoose = require("mongoose");
const Restaurant = new mongoose.Schema(
    {
        name: String,
        location: Object,
        categories: Object,
        images: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("restaurant", Restaurant);
