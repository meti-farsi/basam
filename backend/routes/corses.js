const express = require("express");
const router = express.Router();
const courseController = require("./../controllers/corses");
const multer = require("multer");
const upload = require("./../utils/uploder");
const authMiddlware = require("../middlewares/auth");
const isAminMiddlware = require("../middlewares/isAdmin");

router
  .route("/")
  .post(
    multer({ storage: upload, limits: { fileSize: 1000000000 } }).single(
      "cover",
    ),
    authMiddlware
    ,isAminMiddlware,
    courseController.create
  );

module.exports = router;
