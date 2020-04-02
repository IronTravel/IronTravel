const mongoose = require("mongoose");
const Chat = new mongoose.Schema(
  {
    user: [{ type: ObjectId, ref: "user" }],
    messages: [
      {
        message: String,
        user: { type: ObjectId, ref: "user" },
        date: Date
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("chat", Chat);
