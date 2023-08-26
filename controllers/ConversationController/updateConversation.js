const db = require("../../db/index")
const Conversation = db.Conversation

const updateConversation = async(req, res) => {
    const { conversationId } = req.params
    const { isCompleted } = req.body
    try {
        const data = await Conversation.findAll({ where: { conversationId } })
        console.log(data.dataValues)
        if (data.dataValues !== null) {
            const updatedData = await Conversation.update({ isCompleted }, { where: { conversationId } })
            if (updatedData[0]) {
                res.json({ message: "success" });
            } else {
                res.json({ message: "not found" });
            }
        } else {
            res.json({ message: "not found" })
        }
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = updateConversation