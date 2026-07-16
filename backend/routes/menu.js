const express = require("express");
const menuController = require("../controllers/menu");
const authMiddlware = require("../middlewares/auth");
const isAminMiddlware = require("../middlewares/isAdmin");
const router = express.Router();

router
  .route("/")
  .get(menuController.getAll)
  .post(authMiddlware, isAminMiddlware, menuController.create);

router
  .route("/all")
  .get(authMiddlware, isAminMiddlware, menuController.getAllPanel);

router.route("/:id")
  .get(menuController.getOne)
  .put(authMiddlware, isAminMiddlware, menuController.update)
  .delete(authMiddlware, isAminMiddlware, menuController.delete);
  
module.exports = router;
