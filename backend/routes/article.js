const express = require("express");
const authMiddleware = require("../middlewares/auth");
const isAdminMiddleware = require("../middlewares/isAdmin");
const articlesController = require("../controllers/article");
// const multer = require("multer");
// const multerStorage = require("./../../utils/uploader");

const router = express.Router();

router
  .route("/")
  .get(articlesController.getAll)
  .post(
    authMiddleware,
    isAdminMiddleware,
    articlesController.create
  );

router.route("/:href").get(articlesController.getOne);

router
  .route("/:id")
  .delete(authMiddleware, isAdminMiddlewarearticlesController.remove);

router
  .route("/draft")
  .post(
    authMiddleware,
    isAdminMiddleware,
    articlesController.saveDraft
  );

module.exports = router;
