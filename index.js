"use strict";

var express = require("express");
var user = require("./lib/user");
var app = express();

app.get("/", function(req, res) {
  res.status(200).json({ message: "You rules man!" });
});

app.post("/auth/github", user.authController);

app.listen(3000, function(err) {
  console.log("Express server running at http://localhost:3000");
});
