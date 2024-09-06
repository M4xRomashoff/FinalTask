module.exports = (sequelize, Sequelize) => {

    return sequelize.define("animals", {

        name:          {type: Sequelize.STRING(45)},
        color:         {type: Sequelize.STRING(45)},
        type:          {type: Sequelize.STRING(25)},
        actions:       {type: Sequelize.STRING(255)},
        birth:         {type: Sequelize.DATEONLY},


    },{ freezeTableName: true,});

};


