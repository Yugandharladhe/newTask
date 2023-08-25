// const { Sequelize, DataTypes } = require('sequelize');
// const { sequelize } = require("../db/index");
module.exports = (sequelize, DataTypes) => {

    const ChatBot = sequelize.define('ChatBot', {
        // Model attributes are defined here
        chatbotId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        // Other model options go here
        tableName: 'ChatBot'
    });
    return ChatBot;
}



// module.exports = { User }