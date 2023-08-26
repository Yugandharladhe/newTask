const db = require("../../db/index")

const EndUser = db.EndUser
const newEndUser = async(req, res) => {
    const { name, email } = req.body
    try {

        const fetchEndUser = await EndUser.findAll({
            where: { name, email }
        })

        if (fetchEndUser.length > 0) {
            res.json({ message: "user already registered" })
        } else {
            const data = await EndUser.create({ name, email });
            if (data) {
                res.json({ message: "success", data })
            } else {
                res.json({ message: "failed", data })
            }
        }
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = newEndUser