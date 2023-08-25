const db = require("../../db/index")

const User = db.User

const getAllUser = async(req, res) => {

    try {
        const data = await User.findAll({});
        if (data) {
            res.json({ message: "success", data });
        } else {
            res.json({ message: "failed", data })
        }
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = getAllUser