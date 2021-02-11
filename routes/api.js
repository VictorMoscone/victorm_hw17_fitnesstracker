const db = require('../models/fitness');

module.exports = (app) => {

    app.get('/all', (req, res) => {
      db.workout.find({}, (err, data) => {
          if (err) {
              res.send(err);
          } else {
              res.json(data);
          };
      });
    });

    // /api/workouts

};