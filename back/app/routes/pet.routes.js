
const controller = require("../controllers/pet.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get( "/test",  controller.test );
    app.get( "/pets",  controller.getPets );
    app.post( "/savePet",  controller.savePet );
    app.post( "/deletePet",  controller.deletePet );

};
