const db = require('../models/fitness');

module.exports = (app) => {

    // This will find all current Workouts within the workout collection.
    app.get('/api/workouts', (req, res) => {
      db.find({}).then((workout) => {
          res.send(workout)
      });
    });

    // This will populate the stats page with the various object data.
    app.get('/api/workouts/range', (req, res) => {
        db.find({}).then((workout) => {
            res.json(workout);
        });
    });

    // This should allow us to save the data when creating a new workout.
    app.post('/api/workouts', (req, res) => {
        db.create(req.body).then((data) => {
            res.send(data);
        });
    });

    // This should allow us to update an existing workout.
    app.put('/api/workouts/:id', (req, res) => {
        let paramId = req.params.id;
        db.findByIdAndUpdate(paramId, {$push: {exercises: req.body}}).then((data) => {
            res.send(data);
        })
    });

};