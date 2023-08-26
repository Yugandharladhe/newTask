const db = require("../../db/index")
const Conversation = db.Conversation

const deleteConversation = async(req, res) => {
    const { conversationId } = req.params
    try {
        const deletedData = await Conversation.destroy({ where: { conversationId } })
        console.log(deletedData)
            //finding if record presend or not in database
        if (deletedData == 0) {
            res.json({ msg: "data not found" }).status(200)
        } //delete record from database
        else {
            res.json({ message: "data deleted Successfully" }).status(200)
        }
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = deleteConversation