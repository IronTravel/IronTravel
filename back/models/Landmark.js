const mongoose = require("mongoose");
const Landmark = new mongoose.Schema(
    {
        name: String,
        location:Object,
        categories:Object,
        images:String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("landmark", Landmark);
