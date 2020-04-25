const mongoose = require("mongoose");
const Travel = new mongoose.Schema(
    {
        name: String,
        travel_type: String,
        from: Date,
        to: Date,
        photos: {type: Array, default: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"] },
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
