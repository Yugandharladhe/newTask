const db = require("../../db/index")

const User = db.User
const Chatbot = db.Chatbot
const getAllChatbot = async(req, res) => {
    const { userId } = req.params
    console.log(userId)
    try {
        const data = await User.findAll({
            attributes: ["name", "email"],
            include: [{
                model: Chatbot,
                as: "chatbots",
                attributes: ["chatbotId", "name"]
            }],
            where: { id: userId }
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

module.exports = getAllChatbot