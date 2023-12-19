const { Router } = require("express");
const { GetAllBlogs, CreateBlogs, UpdateBlogs, DeleteBlogs, GetOneBlogs, SearchBlogs } = require("../controller/Blog.Controller");
const { isAuth } = require("../controller/Admin.Controller");



const router = Router();

router.get('/blog',GetAllBlogs);
router.get('/blog/:id',GetOneBlogs);
router.get('/blogs',SearchBlogs)
router.post('/blog',isAuth,CreateBlogs);
router.put('/blog/:id',isAuth,UpdateBlogs);
router.delete('/blog/:id',isAuth,DeleteBlogs);

module.exports = router;