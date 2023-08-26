const db = require("../../db/index")
const Conversation = db.Conversation

const getSingleConversation = async(req, res) => {
    const { conversationId } = req.params
    try {

        const data = await Conversation.findAll({
            where: { conversationId }
        })
        if (data.length > 0) {
            res.json({ message: "success", data })
        } else {
            res.json({ message: "chatbot not found" })
        }
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = getSingleConversation