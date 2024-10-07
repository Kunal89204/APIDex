const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")

dotenv.config()
app.use(bodyParser.json())
app.use(cors())



module.exports = app;