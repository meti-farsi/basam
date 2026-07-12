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
    authMiddlware,
    isAminMiddlware,
    courseController.create,
  );

router.route("/:href").get(authMiddlware, courseController.getOneCourse);

<<<<<<< HEAD
  router
  .route("related/:href")
  .get( courseController.relatedCoureses);

  router
  .route("/category/:href")
  .get (courseController.getByCategory);
=======
router.route("/category/:href").get(courseController.getByCategory);
>>>>>>> refs/remotes/origin/main

router
  .route("/sessions/:id")
  .delete(authMiddlware, isAminMiddlware, courseController.removeSession);

router
  .route("/:href/:sessionID")
  .get(authMiddlware, isAminMiddlware, courseController.getSessionInfo);

router.route("/:id/register").post(authMiddlware, courseController.register);

router.route("/:id").delete(courseController.removeCourse);

module.exports = router;
