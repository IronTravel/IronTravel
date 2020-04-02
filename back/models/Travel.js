const mongoose = require("mongoose");
const Travel = new mongoose.Schema(
  {
    travel_type: String,
    trip: String,
    city: String,
    country: String,
    travel_partners: { type: ObjectId, ref: "user" },
    visited_places: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("travel", Travel);
