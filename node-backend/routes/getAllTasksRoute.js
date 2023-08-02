const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.route("/").get(async (req, res) => {
  // console.log(req.body);

  const data = await Task.find();
  // console.log(data, "all datat");
  if (data) {
    res.json({ success: true, tasks: data });
  } else {
    res.json({ success: false, tasks: null });
  }
});

module.exports = router;
