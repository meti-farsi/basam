const express = require("express");
const userController = require('./../controllers/user')
const router = express.Router()
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")


router.route("/ban/:id").post(authMiddlware,isAminMiddlware,userController.banUser)
router.route("/").get(userController.getAll)


module.exports = router