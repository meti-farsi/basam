const express = require("express");
const commentController = require('./../controllers/comment')
const router = express.Router()
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")

router.route("/")
.post(authMiddlware, commentController.create)


module.exports = router