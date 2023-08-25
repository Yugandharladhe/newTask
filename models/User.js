// const { Sequelize, DataTypes } = require('sequelize');
// const { sequelize } = require("../db/index");
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        tableName: 'User'
    });

    return User;
}



// module.exports = { User }