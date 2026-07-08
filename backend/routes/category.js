const express = require("express");
const categoryController = require('./../controllers/category')
const router = express.Router()
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")

router.route("/").post(authMiddlware, isAminMiddlware, categoryController.create).get(authMiddlware, isAminMiddlware,categoryController.getAll)

router.route("/:id").delete(authMiddlware, isAminMiddlware ,categoryController.remove).put(authMiddlware, isAminMiddlware , categoryController.update)

module.exports = router