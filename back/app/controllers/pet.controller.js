
exports.test  = (req, res) => {

    if (req.query) {

           return res.status(200).send({message: 'test ok !'})

    }
}

