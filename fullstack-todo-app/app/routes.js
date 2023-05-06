module.exports = app => {
    const tasks = require('');

    var router = require('express').Router();

    //POST todo
    app.post('/api/create/todo', tasks.createTask);

    //GET all by id
    router.get("/", tasks.findAll);

    //DELETE task by id
    router.delete("/:id", tasks.delete);

    app.use("/api/tasks", router);
};