const db = require("../../db/index")

const EndUser = db.EndUser
const newEndUser = async(req, res) => {



    const data = await EndUser.create({ name: "yugandhar", email: "yugandharladhe74@gmail.com" })
    console.log(data)
    res.json({ success: true })
}

module.exports = newEndUser