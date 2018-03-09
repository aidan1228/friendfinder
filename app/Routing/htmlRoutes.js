var path = require("path");
var loadPage = function(app){
app.get("/", function(req, res) {
    // console.log("here");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
};

module.exports = loadPage;