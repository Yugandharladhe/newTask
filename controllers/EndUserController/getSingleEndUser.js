const db = require("../../db/index")
const EndUser = db.EndUser
const Conversation = db.Conversation

const getSingleEndUser = async(req, res) => {
    const { enduserId } = req.params
    try {
        const data = await EndUser.findAll({
            where: { enduserId }
        })
        if (data) {
            res.json({ message: "Success" }, data)
        } else {
            res.json({ message: "not found" })
        }

    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = getSingleEndUser