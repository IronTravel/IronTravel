const mongoose = require("mongoose");
const Travel = new mongoose.Schema(
    {
        name: String,
        travel_type: String,
        from: Date,
        to: Date,
        main_image: String,
        country: { type: mongoose.Schema.ObjectId, ref: "country" },
        partners: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
        entries: Array
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("travel", Travel);
