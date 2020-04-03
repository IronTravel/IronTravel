const mongoose = require("mongoose");
const LifeStyle = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("lifeStyle", LifeStyle);
