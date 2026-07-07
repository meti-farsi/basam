const express = require("express");
const userController = require('./../controllers/user')
const router = express.Router()

<<<<<<< HEAD
router.route("/ban/:id")
.post(userController.banUser)
=======

router.route("/ban/:id").post(userController.banUser)
router.route("/").get(userController.getAll)
>>>>>>> refs/remotes/origin/main


module.exports = router