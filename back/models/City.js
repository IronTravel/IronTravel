const mongoose = require("mongoose");
const City = new mongoose.Schema(
  {
    name: String,
    country: String,
    description:String,
    image: String,
    restaurants: Array,
    landmarks: Array,
    museums:Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("city", City);
