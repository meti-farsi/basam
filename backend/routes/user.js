const express = require("express");
const userController = require('./../controllers/user')
const router = express.Router()

router.route("/ban/:id").get(userController.banUser)


module.exports = router