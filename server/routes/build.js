const routes = require("express").Router();

const { Build } = require("../models/build");

//Create
routes.post("/api/build/create", (req, res) => {
  const build = new Build(req.body);
  build.save(function (err, doc) {
    if (err) return res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//getData

routes.get("/api/getBuild/:key", (req, res) => {
  Build.find({ projectKey: req.params.key }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

//Delete
routes.post("/api/build/delete", function (req, res) {
  let id = req.body._id;
  Build.findByIdAndDelete(id, (err, build) => {
    if (err) return res.status(400).send(err);
    if (!build)
      return res.json({
        message: "Not Found",
      });
    return res.status(201).json({
      message: "Build Deleted Succesfully",
    });
  });
});

//Find
routes.get("/api/build/:_id", function (req, res) {
  let id = req.params._id;
  Build.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    if (!doc)
      return res.json({
        message: "Build not found ",
      });
    return res.status(200).send(doc);
  });
});

//Update

routes.post("/api/build/:id", function (req, res) {
  Build.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(201).send(doc);
    }
  );
});

module.exports = routes;
