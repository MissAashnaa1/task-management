const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.route("/").post(async (req, res) => {
  console.log(req.body);
  let obj = req.body;
  obj = new Task(obj);

  let save = await obj.save();
  console.log(obj, "mongo");

  if (save) {
    res.json({ success: true, task: obj });
  } else {
    res.json({ success: false, task: null });
  }
});

module.exports = router;
