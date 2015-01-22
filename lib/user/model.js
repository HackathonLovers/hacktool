"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email       : { type: 'String', unique: true, lowercase: true },
  displayName : 'String',
  github      : 'String',
  projects    : [{
    url: 'String',
  }],
  team        : 'String'
});

exports = mongoose.model('User', userSchema);
