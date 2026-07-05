const express = require("express");
const path = require("path");
const cors = require("cors")
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const app = express();

app.use('/courses/covers', express.static(path.join(__dirname, "public",'courses',"covers")))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
let b = null
app.use("/auth",authRouter)

module.exports = app;
