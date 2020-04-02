const mongoose = require("mongoose");
const LifeStyle = new mongoose.Schema(
  {
    life_style: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("lifeStyle", LifeStyle);
