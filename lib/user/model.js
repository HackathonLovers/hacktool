"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email       : { type: 'String', unique: true, lowercase: true },
  displayName : 'String',
  github      : 'String'
});

exports = mongoose.model('User', userSchema);
