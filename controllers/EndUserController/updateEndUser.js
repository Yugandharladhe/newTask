const db = require("../../db/index")
const EndUser = db.EndUser

const updateEndUser = async(req, res) => {
    const { endUserId } = req.params
    const { name, email } = req.body
    try {
        const data = await EndUser.findAll({ where: { enduserId: endUserId } })
        console.log(data)
        if (data.dataValues !== null) {
            const find = await EndUser.findAll({ where: { name, email } })
            if (find.length === 0) {
                const updatedData = await EndUser.update({ name, email }, { where: { enduserId: endUserId } })
                if (updatedData[0]) {
                    res.json({ message: "success", data: updatedData });
                } else {
                    res.json({ message: "failed", data: updatedData });
                }
            } else {
                res.json({ message: "data duplication not allowed" })
            }

        } else {
            res.json({ message: "not found" })
        }

    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = updateEndUser