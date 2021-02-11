const path = require('path');

module.exports = function(app) {

    // When directed to exercise URL, bring the user to the appropriate html file.
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));  
    });

    // When directed to index URL, bring the user to the appropriate html file.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // When directed to stats URL, bring the user to the appropriate html file.
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
};