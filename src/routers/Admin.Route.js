const { Router } = require('express');
const { Register, Login } = require('../controller/Admin.Controller');

const router = Router();

router.post('/register',Register);
router.post('/login',Login)


module.exports = router;