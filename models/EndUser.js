// const { Sequelize, DataTypes } = require('sequelize');
// const { sequelize } = require("../db/index");
module.exports = (sequelize, DataTypes) => {

    const EndUser = sequelize.define('EndUser', {
        // Model attributes are defined here

        enduserId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        }
    }, {
        // Other model options go here
        tableName: 'EndUser'
    });

    return EndUser;
}



// module.exports = { User }