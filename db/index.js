const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize('chatbot', 'root', 'system', {
    host: 'localhost',
    dialect: 'mysql'
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Chatbot = require("../models/ChatBot")(sequelize, DataTypes)
db.Conversation = require("../models/Conversation")(sequelize, DataTypes)
db.EndUser = require("../models/EndUser")(sequelize, DataTypes)
db.User = require("../models/User")(sequelize, DataTypes)

db.User.hasMany(db.Chatbot, { foreignKey: "userId", as: "chatbots" })
db.Chatbot.belongsTo(db.User, { foreignKey: "userId", as: "chatbots" })

db.Chatbot.hasMany(db.Conversation, { foreignKey: "chatbotId", as: "conversations" })
db.Conversation.belongsTo(db.Chatbot, { foreignKey: "chatbotId", as: "conversations" })

db.EndUser.hasOne(db.Conversation, { foreignKey: 'enduserId', as: "conversation" })
db.Conversation.belongsTo(db.EndUser, { foreignKey: 'enduserId', as: "conversation" })


db.sequelize.sync();
module.exports = db