const express = require("express");
const router = express.Router();
const NotificationContriller = require("../controllers/notification");
const authMiddlware = require("../middlewares/auth");
const isAminMiddlware = require("../middlewares/isAdmin");

router
  .route("/")
  .post(authMiddlware, isAminMiddlware, NotificationContriller.create)
  .get(authMiddlware, isAminMiddlware, NotificationContriller.getAll)

router
  .route("/admin")
  .get(authMiddlware, isAminMiddlware, NotificationContriller.get);

  router.route("/:id").delete(authMiddlware, isAminMiddlware, NotificationContriller.remove)

  router
  .route("/:id/seen")
  .put(authMiddlware, isAminMiddlware, NotificationContriller.seen);

module.exports = router;
