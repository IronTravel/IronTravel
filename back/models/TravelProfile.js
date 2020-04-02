const mongoose = require("mongoose");
const TravelProfile = new mongoose.Schema(
  {
    name: String,
    partners: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
    entries: [
      {
        date: Date,
        type: String,
        rel: {
          type: String,
          enum: ["photo", "music", "post"]
        }
      }
    ],
    organizator_tour: { type: mongoose.Schema.ObjectId, ref: "user" },
    organizator_host: { type: mongoose.Schema.ObjectId, ref: "user" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("travelProfile", TravelProfile);
