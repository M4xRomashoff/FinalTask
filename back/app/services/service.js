const db = require("../models");
const {Op} = require("sequelize");

const Pets = db.pets;

// ---------------------------------------------------------------------------------------------------------------------



async function processData(data){

    if (data && data.length){

        console.log('data', data)

        // data.map((item) => {
        //
        //
        //     try {
        //         const tableName = item.name.toLowerCase();
        //         const [names, values] = getNamesAndValues(item.values);
        //
        //         if (names && values && names.length>0 && values.length >0) {
        //
        //             const results =  db.sequelize.query(
        //                 `
        //             INSERT INTO ${tableName} ${names} VALUES ${values};
        //
        //             `)
        //                 .then(res => {return  res})
        //                 .catch(err => {console.log('MYSQL err', err); return  err})
        //         }
        //
        //     } catch (catchError) { console.log('CATCH ERROR', catchError);  return  catchError}
        // })
    }
    else return 'не данных';
}



module.exports = {
    processData:processData,

};
