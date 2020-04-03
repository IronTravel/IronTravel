const mongoose = require("mongoose");
const Personality = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("personality", Personality);
