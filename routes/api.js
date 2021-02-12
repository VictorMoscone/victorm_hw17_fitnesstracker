const db = require('../models/fitness');

module.exports = (app) => {

    app.get('/api/workouts', (req, res) => {
      db.find({}).then((workout) => {
          res.send(workout)
      });
    });

    // /api/workouts

};