const mongoose = require("mongoose");
const Amenity = new mongoose.Schema(
  {
    Amenity: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("amenity", Amenity);
