var userProfiles = require("../data/friends.js");

// var express = require("express");

// var app = express();

var getPost = function (app){
    app.get("/api/friends", function(req, res) {
        res.json(userProfiles);

    });

    app.post("/api/friends", function(req, res) {
        

        var match;
        var difference = 50;
        var userScore = 0;
        // console.log(req.body.scores);
        for(var x = 0; x < req.body.scores.length; x++){
            userScore += req.body.scores[x];
        }
        for(var i = 0; i < userProfiles.length; i++){
            var scores = userProfiles[i].scores

            var profileScore = 0;
            for(var j = 0; i < scores.length; i++){
                profileScore += scores[i];
            }

            if(difference > Math.abs(userScore - profileScore)){
                difference = Math.abs(userScore - profileScore);
                match = userProfiles[i];
            }
            
        }
        userProfiles.push(req.body);
        res.json(match);
    });
};

module.exports = getPost;

    
