exports.createTask = (req, res) => {

    const tasks = new Todo({
        task: req.body
    });

    //save in db
    tasks
        .save(tasks)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Something went wrong. :("
            });
        });
};

exports.findAll = (req, res) => {
    
}