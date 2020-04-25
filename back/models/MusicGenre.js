const mongoose = require("mongoose");
const MusicGenre = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("musicGenre", MusicGenre);
