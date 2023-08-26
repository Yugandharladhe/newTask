const db = require("../../db/index")
const Chatbot = db.Chatbot

const deleteChatbot = async(req, res) => {
    const { chatbotId } = req.params
    try {
        const deletedData = await Chatbot.destroy({ where: { chatbotId } })
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

module.exports = deleteChatbot