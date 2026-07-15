const express = require('express');
const router = express.Router();
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")

const ticketController = require("../controllers/ticket")

router.route("/")
    .get(authMiddlware, ticketController.getAll)
    .post(authMiddlware, isAminMiddlware, ticketController.create)

router.route("/user")
    .get(authMiddlware, ticketController.userTickets)

router.route("/department")
    .get(authMiddlware, ticketController.getDeps)



router.route("/:id/department-sub")

    .get(authMiddlware, ticketController.getDepSubs)


router.route("/answer")
    .post(authMiddlware, isAminMiddlware, ticketController.setAnswer)
router.route("/:id/answer")
    .get(authMiddlware, ticketController.getAnswer)

module.exports = router;
