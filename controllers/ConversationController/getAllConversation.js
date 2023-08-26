const db = require("../../db/index")
const Conversation = db.Conversation
const Chatbot = db.Chatbot

const getAllConversation = async(req, res) => {
    const { chatbotId } = req.params
    console.log(chatbotId)
    try {
        const data = await Chatbot.findAll({
            include: [{
                model: Conversation,
                as: "conversations",
                attributes: ["question", "answer"]
            }],
            where: { chatbotId }
        })

        if (data.length > 0) {
            res.json({ message: "success", data })
        } else {
            res.json({ message: "data not found" })
        }
        // console.log(data)

    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = getAllConversation