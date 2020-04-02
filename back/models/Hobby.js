const mongoose = require("mongoose");
const Hobby = new mongoose.Schema(
  {
    hobby: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("hobby", Hobby);
