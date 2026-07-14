const express = require("express");
const authMiddleware = require("./");
const isAdminMiddleware = require("./../../middlewares/isAdmin");
const articlesController = require("./../../controllers/v1/article");
const multer = require("multer");
const multerStorage = require("./../../utils/uploader");

const router = express.Router();

router
  .route("/")
  .get(articlesController.getAll)
  .post(
    authMiddleware,
    isAdminMiddleware,
    multer({ storage: multerStorage, limits: { fileSize: 100000000 } }),
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
    multer({ storage: multerStorage, limits: { fileSize: 100000000 } }),
    articlesController.saveDraft
  );

module.exports = router;
