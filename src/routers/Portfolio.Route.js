const { Router } = require("express");
const { GetAllPortfolio, CreatePortfolio, UpdatePortfolio, DeletePortfolio } = require("../controller/Portfolio.Controller");
const { isAuth } = require("../controller/Admin.Controller");

const router = Router();

router.get('/portfolio',GetAllPortfolio);
router.post('/portfolio',isAuth,CreatePortfolio);
router.put('/portfolio/:id',isAuth,UpdatePortfolio);
router.delete('/portfolio/:id',isAuth,DeletePortfolio);

module.exports = router;