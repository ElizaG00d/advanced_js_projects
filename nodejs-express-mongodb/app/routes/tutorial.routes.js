module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //create a new Tutorial
    router.post("/", tutorials.create);

    //retrieve all
    router.get("/", tutorials.findAll);

    //retrieve all published
    router.get("/published", tutorials.findAllPublished);

    //retrive single with id
    router.get("/:id", tutorials.findOne);

    //update w id
    router.put("/:id", tutorials.update);

    //del w id
    router.delete("/:id", tutorials.delete);

    //del all
    router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);
};