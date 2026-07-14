const express = require('express');
const router = express.Router();
const authMiddlware = require("../middlewares/auth")
const isAminMiddlware = require("../middlewares/isAdmin")

const contactController = require("../controllers/contact")

router.get('/', contactController.getAll )
router.post('/', contactController.create )
router.delete('/:id',authMiddlware,isAminMiddlware,contactController.remove )
router.post('/answer', authMiddlware,isAminMiddlware,contactController.answer)

module.exports = router;
