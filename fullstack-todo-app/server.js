const express = require('express');
const mongoose = require('mongoose');
//const bodyparser = require('body-parser');

const app = express();

//mongoDB connection
mongoose.connect('');

//model creation

//var TaskModel = mongoose.model('TaskModel', Todo);

//app configure
app.use('/app', express.static(__dirname + '/app'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//routing and routing controllers
//GET
app.get('./', (req, res) => {
    res.send('app/index.html')
});

//POST
//needs work
app.post('./api/create/todo', createTodo);
function createTodo(req, res) {
    let todoTask = req.body;

    TaskModel.create(todoTask).then(
        function (success) {
            console.log('Successful.')
        },
        function (error) {
            console.log('Err')
        }
    )

    res.json(todoTask);
};

//GET ALL
app.get('/api/get/tasks', getAllTasks);
function getAllTasks(req, res) {
    TaskModel.find().then(
        function (tasks) {
            res.json(tasks)
        },
        function (err) {
            res.sendStatus(400)
        }
    )
};

//DELETE TASK
app.delete('/api/delete/task/:id', deleteTask);
function deleteTask(req, res) {
    var taskId = req.params.taskId;

    TaskModel.remove({ _id: mongoose.Types.ObjectId(taskId) }).then(
        function () {
            res.sendStatus(200)
        },
        function () {
            res.sendStatus(400)
        }
    )
};

//get req
app.get("/", (req, res) => {
    res.send("<h2>Things You Should Be Doing")
});

//DELETE
app.delete('/api/delete/task/:id', deleteTask)

//port and req listening
const PORT = process.env.PORT || 8080;
app.listen('8080', () => {
    console.log(`Server up ${PORT}`)
});