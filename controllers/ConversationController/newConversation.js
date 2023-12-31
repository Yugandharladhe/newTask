const db = require("../../db/index")
const Conversation = db.Conversation


const newConversation = async(req, res) => {
    const { chatbotId } = req.params
    const { question, answer, enduserId } = req.body
    try {
        const data = await Conversation.create({ chatbotId, question, answer, enduserId });
        if (data) {
            res.json({ message: "success", data })
        } else {
            res.json({ message: "failed", data })
        }
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = newConversation