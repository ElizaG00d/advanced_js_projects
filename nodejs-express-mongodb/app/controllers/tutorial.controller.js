const db = require('../models');
const Tutorial = db.tutorials;

//create and save new tutorial
exports.create = (req, res) => {
    //validate req
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //create tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    //save tutorial in the db
    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the Tutorial."
            });
        });
};

//find single tutorial w id
exports.findOne = (req, res) => {

};

//update tutorial by id in req
exports.update = (req, res) => {

};

//del tutorial w specified id in req
exports.delete = (req, res) => {

};

//del all tutorials from db
exports.deleteAll = (req, res) => {

};

//find all published tutorials
exports.findAllPublished = (req, res) => {

};