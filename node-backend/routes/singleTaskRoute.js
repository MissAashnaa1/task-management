const express = require("express");

const router = express.Router();

router.route("/:id").get((req, res) => {
  console.log(req.params.id, "sfd");

  res.json({ msg: "testing single task task route" });
});

module.exports = router;
