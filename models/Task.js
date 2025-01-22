const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  priority: { type: Number, min: 1, max: 5, required: true },
  status: { type: String, enum: ["pending", "finished"], required: true },
});

module.exports = mongoose.model("Task", TaskSchema);
