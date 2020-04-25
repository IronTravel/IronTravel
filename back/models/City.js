const mongoose = require("mongoose");
const City = new mongoose.Schema(
  {
    name: String,
    country: String,
    description:String,
    image: String,
    restaurants: [{ type: mongoose.Schema.ObjectId, ref: "restaurant" }],
    landmarks: [{ type: mongoose.Schema.ObjectId, ref: "landmark" }],
    museums: [{ type: mongoose.Schema.ObjectId, ref: "museum" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("city", City);
