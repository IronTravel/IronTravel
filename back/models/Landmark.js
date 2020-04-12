const mongoose = require("mongoose");
const Landmark = new mongoose.Schema(
    {
        name: String,
        location:Object,
        categories:Object,
        images:{type: String, default: ""}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("landmark", Landmark);
