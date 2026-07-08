const express = require("express");
const userController = require('./../controllers/user')
const router = express.Router()
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")


router.route("/ban/:id").post(authMiddlware,isAminMiddlware,userController.banUser)
router.route("/")
.get(authMiddlware,isAminMiddlware,userController.getAll)
.put(authMiddlware,userController.updateUser)
router.route("/:id").delete(authMiddlware,isAminMiddlware,userController.removeUser)
router.route("/role").put(authMiddlware,isAminMiddlware,userController.updateRole)
router.route("/role").put(authMiddlware,isAminMiddlware,userController.updateRole)

module.exports = router