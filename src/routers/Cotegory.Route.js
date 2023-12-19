const { Router } = require('express');
const { GetAllCotegory, CreateCotegory, UpdateCotegory, DeleteCotegory } = require('../controller/Cotegory.Controller');
const GetTouch = require('../controller/GetInTouch.Controller');
const { isAuth } = require('../controller/Admin.Controller');


const router = Router();

router.get('/cotegory',GetAllCotegory);
router.post('/cotegory',isAuth,CreateCotegory);
router.put('/cotegory/:id',isAuth,UpdateCotegory);
router.delete('/cotegory/:id',isAuth,DeleteCotegory);
router.post('/touch',GetTouch)


module.exports = router;