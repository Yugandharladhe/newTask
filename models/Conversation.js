// const { Sequelize, DataTypes } = require('sequelize');
// const { sequelize } = require("../db/index");
module.exports = (sequelize, DataTypes) => {

    const Conversation = sequelize.define('Conversation', {
        // Model attributes are defined here
        conversationId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
            type: DataTypes.STRING,
        },
        answer: {
            type: DataTypes.STRING,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        chatbotId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        enduserId: {
            type: DataTypes.INTEGER
        }
    }, {
        // Other model options go here
        tableName: 'Conversation'
    });

    return Conversation
}



// module.exports = { User }