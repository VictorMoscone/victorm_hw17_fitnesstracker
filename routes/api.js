const db = require('../models/fitness');

module.exports = (app) => {

    // This will find all current Workouts within the workout collection.
    app.get('/api/workouts', (req, res) => {
      db.find({}).then((workout) => {
          res.send(workout)
      });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.find({}).then((workout) => {
            res.json(workout);
        });
    });

    app.post('/api/workouts', (req, res) => {
        db.create(req.body).then((data) => {
            res.send(data);
        });
    });

    app.put('/api/workouts/:id', (req, res) => {
        let paramId = req.params.id;
        db.findByIdAndUpdate(paramId, {$push: {exercises: req.body}}).then((data) => {
            res.send(data);
        })
    });

};