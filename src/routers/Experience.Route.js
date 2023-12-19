const { Router } = require("express");
const { GetAllExperience, CreateExperience, UpdateExperience, DeleteExperience } = require("../controller/Experience.Controller");
const { isAuth } = require("../controller/Admin.Controller");

const router = Router();

router.get('/experience',GetAllExperience);
router.post('/experience',isAuth,CreateExperience);
router.put('/experience/:id',isAuth,UpdateExperience);
router.delete('/experience/:id',isAuth,DeleteExperience);

module.exports = router;