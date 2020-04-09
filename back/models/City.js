const mongoose = require("mongoose");
const City = new mongoose.Schema(
  {
    city: String,
    country: String,
    description:String,
    image: String,
    restaurants: Array,
    landmarks: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("city", City);
