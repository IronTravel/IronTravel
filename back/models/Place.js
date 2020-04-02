const mongoose = require("mongoose");
const Place = new mongoose.Schema(
  {
    description: String,
    availability: Boolean,
    amenities: [{ type: ObjectId, ref: "amenity" }],
    guests: Number,
    pets: String,
    photos: Array,
    approximate_address: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("place", Place);
