const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Posts is working" });
});

module.exports = router;
