const mongoose = require("mongoose");
const Hobby = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("hobby", Hobby);
