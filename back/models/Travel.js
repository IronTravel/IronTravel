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
        entries: [
            {
                date: Date,
                type: { type: String, enum: ["photo", "music", "post"] },
                likes: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("travel", Travel);
