const { Router } = require("express");
const { GetAllSkills, CreateSkills, UpdateSkills, DeleteSkills } = require("../controller/Skills.Controller");
const { isAuth } = require("../controller/Admin.Controller");


const router = Router();

router.get('/skills',GetAllSkills);
router.post('/skills',isAuth,CreateSkills);
router.put('/skills/:id',isAuth,UpdateSkills);
router.delete('/skills/:id',isAuth,DeleteSkills);

module.exports = router;