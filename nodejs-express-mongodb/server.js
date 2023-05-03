const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOptions));

//parse req of content type - application/json
app.use(express.json());

//parse reqs of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder's initial application." });
});

//set port, list for reqs
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//imports express and cors modules
//cors - provides express middleware to enable CORS w/ various options