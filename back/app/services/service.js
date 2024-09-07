const db = require("../models");
const {Op} = require("sequelize");

const Pets = db.pets;

// ---------------------------------------------------------------------------------------------------------------------



async function getPets(petType){

    return new Promise((Resolve, Reject) => {

    if (petType){

            let selector = '';
            switch (petType){
                case 'cat':     selector = 'WHERE type = "cat" '    ; break;
                case 'dog':     selector = 'WHERE type = "dog" '    ; break;
                case 'hamster': selector = 'WHERE type = "hamster" '; break;
            }


            const results = db.sequelize.query(
                `
                    SELECT * FROM animals ${selector};

                    `)
                .then(res => {
                    Resolve(res[0])
                })
                .catch(err => {
                    console.log('MYSQL err', err);
                    Reject(err)
                })

    }
    else Resolve('нет данных');
    })
}


async function savePet(petType, name, dob, color, actions ){

    return new Promise((Resolve, Reject) => {

        try {
            const tableName = 'animals';

            if (petType && name && dob && color && actions) {

                const results =  db.sequelize.query(
                    `
                        INSERT INTO ${tableName} (name, type, birth, actions, color) 
                        VALUES ("${name}","${petType}","${dob}","${actions}","${color}") ;
    
                        `)
                    .then(res => {Resolve('сохранено')})
                    .catch(err => {console.log('MYSQL err', err);Resolve(err);})
            }

        } catch (catchError) { console.log('CATCH ERROR', catchError);  Resolve(catchError)}
    })
}


async function deletePet(id){

    return new Promise((Resolve, Reject) => {

        try {
            const tableName = 'animals';

            if (id) {

                const results =  db.sequelize.query(
                    `
                        DELETE FROM ${tableName} WHERE id = ${id} ;
    
                        `)
                    .then(res => {Resolve('удалено')})
                    .catch(err => {console.log('MYSQL err', err);Resolve(err);})
            }

        } catch (catchError) { console.log('CATCH ERROR', catchError);  Resolve(catchError)}
    })
}



module.exports = {

    getPets: getPets,
    savePet: savePet,
    deletePet: deletePet,

};
