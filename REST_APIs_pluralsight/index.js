//part of setting up an express server with notes and explanations

//bring in express server and create application
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo'); //brings in exports from module


//use express router object, needed to create an endpoint
let router = express.Router();

//create GET to return a list of all pies
router.get('/', function (req, res, next) {
    pieRepo.get(function (data) { //parameter one that is needed, if pass is successful then this submits
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": pies
        });
    }, function(err) { //parameter two that is needed, the err that is passed to the middlewere
        next(err);
    });
}); //hook up a get method
//next for middle-were error handling

// create GET/search?id=n&name=str to search for pies by 'id' and/or name
//needs to be added before get/id
router.get('/search', function(req, res, next) {
    let searchObject = {
        "id": req.query.id,
        "name": req.query.name
    };

    pieRepo.search(searchObject, function(data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "Single pie retrieved.",
            "data": data
        });
    }, function (err) {
        next(err);
    });
});

//GET/id to return a single pie
router.get('/:id', function (req, res, next) {
    pieRepo.getById(req.params.id, function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Single pie retrieved.",
                "data": data
            });
        } else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id + "' could not be found.",
                "error": {
                    "code" : "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function(err) {
        next(err);
    });
})

//configure router so all routes are prefixed with /api/v1
app.use('/api/', router);
//add on after 5000/api/

//create server to listen on port 5000
var server = app.listen(5000, function() {
    console.log('Node server is running on http://localhost:5000..');
});
//tells to liste on port 5000 for connections to the host and port number
//the note will appear in the console
//end work on setting up express server

//wrapping in json object "JSON envelope"
//idk where this is supposed to go actually
