const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const chatbotRoute = require("./routes/chatbotRoutes")
const conversationRoute = require("./routes/conversationRoutes")
const enduserRoute = require("./routes/enduserRoutes")
const userRoute = require("./routes/usersRoute")
    // const { User } = require("./models/User")
    // const { EndUser } = require("./models/EndUser")



// User.sync({ force: true });
// EndUser.sync({ force: true });


app.use("/api", chatbotRoute);
app.use("/api", conversationRoute);
app.use("/api", enduserRoute);
app.use("/api", userRoute);

app.listen(5000, () => {
    console.log("app is listening")
})