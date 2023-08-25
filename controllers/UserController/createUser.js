const db = require("../../db/index")

const User = db.User
const createUser = async(req, res) => {
    const { name, email } = req.body
    try {

        const data = await User.create({ name, email });
        if (data) {
            res.json({ message: "success", data })
        } else {
            res.json({ message: "failed", data })
        }
    } catch (err) {
        res.json({ error: err })
    }

}

module.exports = createUser