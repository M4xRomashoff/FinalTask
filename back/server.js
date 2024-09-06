const rootPath = __dirname;
module.exports = { rootPath };
const express = require("express");
const cors = require("cors");
const pet_server = express();
const PdmService = require("./app/services/service");

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

pet_server.use(cors());

// parse requests of content-type - application/json
pet_server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
pet_server.use(express.urlencoded({ extended: true }));

// simple route
pet_server.get("/test", (req, res) => {
    res.json({ message: "Server is running !" });
});

pet_server.use((req, res, next) => {

    console.log('req.query',req.query);
    console.log('req.body',req.body?.length);

    next();
});


const PORT = process.env.PORT || 5000;
pet_server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

require('./app/routes/pet.routes')(pet_server);

const db = require("./app/models");

db.sequelize.sync();


