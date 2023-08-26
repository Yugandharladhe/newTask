const db = require("../../db/index")
const Chatbot = db.Chatbot

const getSingleChatbot = async(req, res) => {
    const { chatbotId } = req.params
    try {

        const data = await Chatbot.findAll({
            where: { chatbotId }
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

module.exports = getSingleChatbot