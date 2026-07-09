const express = require("express");
const path = require("path");
const cors = require("cors")
const authRouter = require("./routes/auth");
const users = require('./routes/user')
const categoryRoter = require('./routes/category')
const courseRouter = require('./routes/corses')
const bodyParser = require("body-parser");

const app = express();

app.use('/courses/covers', express.static(path.join(__dirname, "public",'courses',"covers")))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use("/auth",authRouter)
app.use("/users",users)
app.use("/category",categoryRoter)
app.use("/courses",courseRouter)

module.exports = app;
