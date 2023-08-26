const db = require("../../db/index")
const EndUser = db.EndUser

const deleteEndUser = async(req, res) => {
    const { endUserId } = req.params

    try {

        const deletedData = await EndUser.destroy({ where: { enduserId: endUserId } })
        console.log(deletedData)
            //finding if record presend or not in database
        if (deletedData == 0) {
            res.json({ msg: "data not found" }).status(200)
        } //delete record from database
        else {
            res.json({ message: "data deleted Successfully" }).status(200)
        }
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = deleteEndUser