const express = require("express");
const userController = require('./../controllers/user')
const router = express.Router()


router.route("/ban/:id").post(userController.banUser)
router.route("/").get(userController.getAll)


module.exports = router