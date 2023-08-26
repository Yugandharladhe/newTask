const { Chatbot } = require("../../db/index")

const updateChatbot = async(req, res) => {
    const { name } = req.body
    const { chatbotId } = req.params
    try {
        const data = await Chatbot.findAll({ where: { chatbotId } })
        console.log(data.dataValues)
        if (data.dataValues !== null) {
            const updatedData = await Chatbot.update({ name }, { where: { chatbotId } })
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

module.exports = updateChatbot