const express = require('express');
const router = express.Router();
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")

const offController = require("../controllers/off")

router.route("/")
    .get(authMiddlware, isAminMiddlware, offController.getAll)
    .post(authMiddlware, isAminMiddlware, offController.create)

router.route("/all")
    .post(authMiddlware, isAminMiddlware, offController.setAllcourse)

router.route("/:code")
    .post(authMiddlware, offController.getOne)

router.route("/id")
    .delete(authMiddlware, isAminMiddlware, offController.remove)

module.exports = router;
