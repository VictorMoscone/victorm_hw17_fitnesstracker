const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },
  
    Exercises: {
        type: Array
    },
    
});

const Workout = mongoose.model("Workout", workoutSchema);


module.exports = Workout;