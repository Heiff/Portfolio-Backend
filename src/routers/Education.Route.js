const { Router } = require("express");
const { GetAllEducation, CreateEducation, UpdateEducation, DeleteEducation } = require("../controller/Education.Controller");
const { isAuth } = require("../controller/Admin.Controller");


const router = Router();

router.get('/education',GetAllEducation);
router.post('/education',isAuth,CreateEducation);
router.put('/education/:id',isAuth,UpdateEducation);
router.delete('/education/:id',isAuth,DeleteEducation);

module.exports = router;