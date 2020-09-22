const db = require("../models");
module.export = (app) => {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (workouts) {
            res.json(workouts);
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create({}).then(function (workout) {
            res.json(workout);
        });
    });

    app.put("/api/workout/:id", function (req, res) {
        console.log(req, body)
        db.Workout.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            { new: true, runValidators: true}
        ).then(function (workout) {
            res.json(workout);
        });
    });
    app.get("/api/worklouts/range", function (req, res) {
        db.Workout.find({}).then(function (workouts) {
            res.json(workouts);
        });
    });

};

