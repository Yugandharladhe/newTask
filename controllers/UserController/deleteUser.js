const db = require("../../db/index")

const User = db.User

const deleteUser = async(req, res) => {
    const { id } = req.params
        // console.log(id)
    try {

        const deletedData = await User.destroy({ where: { id } })
        console.log(deletedData)
            //finding if record presend or not in database
        if (deletedData == 0) {
            res.json({ msg: "data not found" }).status(200)
        } //delete record from database
        else {
            res.json({ message: "data deleted Successfully" }).status(200)
        }
    } catch (err) {

    }

}

module.exports = deleteUser