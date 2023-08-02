const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.route("/:id").delete(async (req, res) => {
  console.log(req.params.id, "sfd");

  const resp = await Task.deleteOne({ _id: req.params.id });
  console.log(resp);
  if (resp.acknowledged) {
    res.json({ success: true, deletion: resp });
  } else {
    res.json({ success: false, deletion: null });
  }
});

module.exports = router;
