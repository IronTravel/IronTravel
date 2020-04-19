const mongoose = require("mongoose");
const Country = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("country", Country);