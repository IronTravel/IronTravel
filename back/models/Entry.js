const mongoose = require("mongoose");
const Entry = new mongoose.Schema(
    {
        author: { type: mongoose.Schema.ObjectId, ref: 'user' },
        body: String,
        type: { type: String, enum: ['text', 'photo', 'video'] },
        date: { type: Date, default: Date.now },
        hidden: { type: Boolean, default: false },
        likes: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("entry", Entry);
