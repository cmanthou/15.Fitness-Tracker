const db = require("../models");
module.exports = (app) => {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (workouts) {
            res.json(workouts);
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create({}).then(function (workout) {
            res.json(workout);
        }).catch(err => {
            res.json (err)
        });
    });

    app.put("/api/workouts/:id", function ({body, params}, res) {
        db.Workout.findByIdAndUpdate(
            params.id ,
            { $push: { exercises: body } },
            { new: true, runValidators: true}
        ).then(function (workout) {
            res.json(workout);
        }).catch (err => {
            res.json (err)
        });
    });
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).then(function (workouts) {
            res.json(workouts);
        });
    });

};

