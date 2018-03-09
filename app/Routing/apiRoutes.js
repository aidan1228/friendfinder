var userProfiles = require("../data/friends.js");

var express = require("express");

var app = express();

var getPost = function (){
    app.get("/api/friends", function(req, res) {
        res.json(userProfiles);
    });

    app.post("/api/friends", function(req, res) {

    });
};

module.exports = getPost;

    
