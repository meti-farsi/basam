const express = require('express');
const router = express.Router();

const auth = require("../controllers/auth")

router.post('/rigester', auth.register )
router.get('/login', auth.login )
router.get('/getme', auth.getMe )

module.exports = router;
