const mongoose = require("mongoose");
const Museum = new mongoose.Schema(
    {
        name: String,
        location: Object,
        categories: Object,
        images: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("museum", Museum);
