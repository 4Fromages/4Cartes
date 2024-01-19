require("dotenv").config()
const express = require("express")

const IndexController = require("./controllers/IndexController")

const app = express()
const path = require('path');
const port = Number.parseInt(process.env.APP_PORT)

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", IndexController.index)

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`)
})
