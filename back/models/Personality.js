const mongoose = require("mongoose");
const Personality = new mongoose.Schema(
  {
    personality: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("personality", Personality);
