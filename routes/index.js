var express = require("express");
var router = express.Router();
var authRoutes = require("./auth");

/* GET home page. */
router.use("/auth",authRoutes);

module.exports = router;
