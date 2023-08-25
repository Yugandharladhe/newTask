const express = require('express')
const router = express.Router()

const createChatbot = require("../controllers/ChatbotController/createChatbot")
const deleteChatbot = require("../controllers/ChatbotController/deleteChatbot")
const getAllChatbot = require("../controllers/ChatbotController/getAllChatbot")
const getSingleChatbot = require("../controllers/ChatbotController/getSingleChatbot")
const updateChatbot = require("../controllers/ChatbotController/updateChatbot")

router.post('/users/:userId/chatbots', createChatbot);
router.get('/users/:userId/chatbots', getAllChatbot);
router.get('/chatbots/:chatbotId', getSingleChatbot);
router.put('/chatbots/:chatbotId', updateChatbot);
router.delete('/chatbots/:chatbotId', deleteChatbot);

module.exports = router