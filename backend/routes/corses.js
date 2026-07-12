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
      "cover"
    ),
    authMiddlware,
    isAminMiddlware,
    courseController.create
  );

router
  .route("/")
  .get(authMiddlware, isAminMiddlware, courseController.getAllSession);

router
  .route("/sessions/:id")
  .delete(authMiddlware, isAminMiddlware, courseController.removeSession);

router
  .route("/:href/:sessionID")
  .get(authMiddlware, isAminMiddlware, courseController.getSessionInfo);

router
  .route("/:id/register")
  .post(authMiddlware, courseController.register);

module.exports = router;
