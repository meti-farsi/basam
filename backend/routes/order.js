const express = require('express');
const router = express.Router();
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")

const orderController = require("../controllers/order")

router.route("/")
    .get(authMiddlware, isAminMiddlware, orderController.getAll)
router.route("/:id")
    .get(authMiddlware, isAminMiddlware, orderController.getOne)

module.exports = router;
