"use strict";

var request = require("request");
var expect = require("chai").expect;
var mongoose = require("mongoose");

describe("Users register and authentication [/auth]", function() {

  before(function(done) {
    mongoose.connect('mongodb://localhost/hacktool-test', done);
  });

  after(function(done) {
    mongoose.connection.collections['users'].drop(function(err) {
      console.log('Test Database dropped');
    });
    mongoose.disconnect(done);
  });

  it("should be create a new user");
  it("should be authenticate an existing user");

});
