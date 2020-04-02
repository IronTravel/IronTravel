const mongoose = require("mongoose");
const MusicGenre = new mongoose.Schema(
  {
    music: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("musicGenres", MusicGenre);
