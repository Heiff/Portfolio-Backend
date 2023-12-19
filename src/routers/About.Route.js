const { Router } = require('express');
const { GetAll, CreateAbout, UpdateAbout } = require('../controller/About.Controller');
const { isAuth } = require('../controller/Admin.Controller');

const router = Router();

router.get('/about',GetAll);
router.post('/about',isAuth,CreateAbout);
router.put('/about',isAuth,UpdateAbout)


module.exports = router;