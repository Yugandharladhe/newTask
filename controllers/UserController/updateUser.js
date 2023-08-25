const db = require("../../db/index")

const User = db.User

const updateUser = async(req, res) => {
    const { name, email } = req.body
    const { id } = req.params
    try {
        const data = await User.findAll({ where: { id } })
        console.log(data.dataValues)
        if (data.dataValues !== null) {
            const updatedData = await User.update({ name, email }, { where: { id } })
            if (updatedData[0]) {
                res.json({ message: "success", data: updatedData });
            } else {
                res.json({ message: "failed", data: updatedData });
            }
        } else {
            res.json({ message: "not found" })
        }
    } catch (err) {
        res.json({ message: err })
    }

}

module.exports = updateUser