const mongoose = require("mongoose");

const taskModel = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String, trim: true },
    status: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskModel);

module.exports = Task;
console.log("collection connected");
