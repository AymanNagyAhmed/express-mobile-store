var express = require("express");
var router = express.Router();
var AuthController = require("../controllers/AuthController");
// var User = require("../models/User.js");

router.post("/register", AuthController.register);
module.exports = router;
