
const Service = require("../services/service");

exports.test  = (req, res) => {

    if (req.query) {

           return res.status(200).send({message: 'test ok !'})

    }
}

exports.getPets  = (req, res) => {

    if (req.query.petType) {

        console.log('req.query.petType',req.query.petType)

        return res.status(200).send({message: 'test ok !'})

    }
}

exports.getPets  = (req, res) => {

    if (req.query) {
        Service.getPets(req.query.petType)
            .then(result =>{
                return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.savePet  = (req, res) => {

    if (req.body) {
        Service.savePet(req.body.petType, req.body.name, req.body.dob, req.body.color, req.body.actions)
            .then(result =>{
                return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.deletePet  = (req, res) => {

    if (req.body) {
        Service.deletePet(req.body.id)
            .then(result =>{
                return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}


