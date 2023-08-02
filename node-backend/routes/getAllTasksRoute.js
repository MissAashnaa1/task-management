const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  console.log(req.body);
  res.json({ msg: "testing getAllTasks" });
});

module.exports = router;
