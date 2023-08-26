const db = require("../../db/index")

const User = db.User
const Chatbot = db.Chatbot

const getSingleUser = async(req, res) => {
    const { id } = req.params
    try {
        const data = await User.findAll({
            attributes: ["name", "email"],
            where: { id }
        })

        console.log(data)
        res.json({ data })
    } catch (err) {

    }
}

module.exports = getSingleUser