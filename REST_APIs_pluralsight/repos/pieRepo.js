let pieRepo = {
    get: function() { //creates a function called get
        return [
            { "id": 1, "name": "Apple" },
            { "id": 2, "name": "Cherry" },
            { "id": 3, "name": "Peach"}
        ];
    }
};

module.exports = pieRepo;

//part pretains to pies.json file that is supposed to have a large array
//set up to pass that array data instead of array above
let fs = require('fs'); //built in to read files
const { resolve } = require('path');

const FILE_NAME = './assets/pies.json';

let pieRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err); //if there's an error send it back
            } else {
                //resolve(JSON.parse(data)); //else parse the data and convert it to actual json
            }
        });
    },
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let pie = JSON.parse(data).find( p => p.id == id); //pass in each pie individually, check id, whatever id is equal to is now equal to the id passed
                resolve(pie); //pie data will come back or null will come back
            }
        })
    },
    search: function (searchOject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let pies = JSON.parse(data);
                //perform serach
                if (searchOject) {
                    //example search object
                    // let searchObject = {
                    //    "id": 1,
                    //}
                    pies = pies.filter(
                        p => (searchOject.id ? p.id == searchOject.id : true) && //checks if search object has a value and if it does then search by id
                            (searchOject.name ? p.name.toLowerCase().indexOf(searchOject.name.toLowerCase() >= 0 : true)); //check if value is greater than or equal to zero if so return true
                    )
                }

                resolve(pies);
            }
        })
    }
};