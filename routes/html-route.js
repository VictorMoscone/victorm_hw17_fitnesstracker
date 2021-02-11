const path = require('path');

module.exports = (app) => {

    // When directed to exercise URL, bring the user to the appropriate html file.
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));  
    });

    // When directed to index URL, bring the user to the appropriate html file.
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // When directed to stats URL, bring the user to the appropriate html file.
    app.get("/stats", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
};