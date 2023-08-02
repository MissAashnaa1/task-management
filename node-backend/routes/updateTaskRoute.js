const express = require("express");

const router = express.Router();

router.route("/").post((req, res) => {
  console.log(req.body);
  res.json({ msg: "testing update task route" });
});

module.exports = router;
