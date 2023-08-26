const db = require("../../db/index")

const EndUser = db.EndUser

const getAllEndUser = async(req, res) => {
    try {
        const data = await EndUser.findAll({})

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

module.exports = getAllEndUser