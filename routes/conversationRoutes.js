const express = require('express')
const router = express.Router()

const createConversation = require("../controllers/ConversationController/newConversation")
const getAllConversation = require("../controllers/ConversationController/getAllConversation")
const getSingleConversation = require("../controllers/ConversationController/getSingleConversation")
const deleteConversation = require("../controllers/ConversationController/deleteConversation")
const updateConversation = require("../controllers/ConversationController/updateConversation")

router.post('/chatbots/:chatbotId/conversations', createConversation);
router.get('/chatbots/:chatbotId/conversations', getAllConversation);
router.get('/conversations/:conversationId', getSingleConversation);
router.put('/conversations/:conversationId', updateConversation);
router.delete('/conversations/:conversationId', deleteConversation);

module.exports = router