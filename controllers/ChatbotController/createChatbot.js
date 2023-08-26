const db = require("../../db/index")
const Chatbot = db.Chatbot

const createChatbot = async(req, res) => {
    const { userId } = req.params
    console.log(userId)
    const { name } = req.body
    try {
        const data = await Chatbot.create({ name, userId });
        console.log(data)
        if (data) {
            res.json({ message: "success", data })
        } else {
            res.json({ message: "failed", data })
        }
    } catch (err) {
        res.json({ error: err })
    }

}

module.exports = createChatbot