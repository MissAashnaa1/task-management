const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.route("/").put(async (req, res) => {
  console.log(req.body);

  let task = await Task.findOne({ _id: req.body.id });

  console.log(task, "oen");

  if (task) {
    task.status = req.body.status;
    const save = await task.save();
    console.log(save, "save");
    if (save) {
      res.json({ success: true, task: save });
    } else {
      res.json({ success: false, task: null });
    }
  } else {
    res.json({ success: false, task: null });
  }
});

module.exports = router;
