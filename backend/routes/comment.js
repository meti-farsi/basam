const express = require("express");
const commentController = require("./../controllers/comment");
const router = express.Router();
const authMiddlware = require("../middlewares/auth");
const isAminMiddlware = require("../middlewares/isAdmin");

router.route("/").post(authMiddlware, commentController.create)
.get(authMiddlware, isAminMiddlware, commentController.getAll);
router.route("/:id").delete(authMiddlware, commentController.remove);
router
  .route("/:id/accept")
  .put(authMiddlware, isAminMiddlware, commentController.accept);
router
  .route("/:id/reject")
  .put(authMiddlware, isAminMiddlware, commentController.reject);

router.route("/:id/answer").post(authMiddlware, isAminMiddlware,commentController.answer);

module.exports = router;
