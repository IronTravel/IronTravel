const mongoose = require("mongoose");
const Chat = new mongoose.Schema(
  {
    user: [{ type: mongoose.Schema, ref: "user" }],
    messages: [
      {
        message: String,
        user: { type: mongoose.Schema, ref: "user" },
        date: Date
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("chat", Chat);
