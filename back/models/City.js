const mongoose = require("mongoose");
const City = new mongoose.Schema(
  {
    name: String,
    country: String,
    restaurants: Array,
    landmarks: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("city", City);
