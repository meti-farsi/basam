const express = require("express");
const router = express.Router();
const newsletterController = require("./../controllers/newsletter");
const authMiddlware = require("../middlewares/auth");
const isAminMiddlware = require("../middlewares/isAdmin");


router.route("/").post(newsletterController.create).get( authMiddlware, isAminMiddlware,  newsletterController.getAll);

module.exports = router