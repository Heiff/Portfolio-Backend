const Blog = require('../model/BlogModel')
const { Op } = require("@sequelize/core")
const { v4:uuid } = require("uuid")
const fs = require('fs').promises

const GetAllBlogs = async(req,res) =>{
    try {
        const { page, size } = req.query;
        const data = await Blog.findAndCountAll({
            limit:size,
            offset:page ? page * size : page 
        })
        res.status(200).json([data.rows,{totalPage:Math.ceil(data.count / size)}])
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const GetOneBlogs = async(req,res) =>{
    try {
        const { id } = req.params;
        const data = await Blog.findOne({where:{id}})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const CreateBlogs = async(req,res) =>{
    try {
        const { title,descr,tags,coteg } = req.body;
        const { image } = req.files;
        const D = new Date();
        const date = `${D.getDate()}.${D.getMonth() + 1}.${D.getFullYear()}`
        const imageName = `${uuid()}.${
            image.name.split(".")[image.name.split(".").length - 1]
          }`;
        await Blog.create({title,image:imageName,descr,date,tags,cotegory:coteg})
        image.mv(process.cwd() + `/uploads/${imageName}`);
        res.status(201).json({message:"succes creates"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}



const UpdateBlogs = async(req,res) => {
    try {
        const { id } = req.params;
        const { title,descr,tags,coteg } = req.body;
        const { image }  = req.files ? req.files : ""
        const data = await Blog.findByPk(id);
        const checktitle = title == 'undefined' ? data.title : title; 
        const checkdescr = descr == 'undefined' ? data.descr : descr;
        const checktags = tags == 'undefined' ? data.tags : tags;
        const checkcoteg = coteg == 'undefined' ? data.cotegory : coteg
        if (image && image !== "") {
            await fs.unlink(process.cwd() + `/uploads/${data.image}`)
            const imageName = `${uuid()}.${
                image.name.split(".")[image.name.split(".").length - 1]
              }`;
              image.mv(process.cwd() + `/uploads/${imageName}`);
              await Blog.update({title:checktitle,descr:checkdescr,tags:checktags,cotegory:checkcoteg,image:imageName},{where:{id}})
              res.status(200).json({message:"succes update"});
        }
          else{
            await Blog.update({title:checktitle,descr:checkdescr,tags:checktags,cotegory:checkcoteg},{where:{id}})
            res.status(200).json({message:"succes update"});
          }
    } catch (error) {
        res.status(500).json(error.message);
    }
}


const DeleteBlogs = async(req,res) =>{
    try {
        const { id } = req.params;
        const data = await Blog.findByPk(id)
        await fs.unlink(process.cwd() + `/uploads/${data.image}`)
        await Blog.destroy({where:{id}})
        res.status(200).json({message:"succes deleting"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const SearchBlogs = async(req,res) => {
    try {
        const { title } = req.query;
        console.log(req);
        const data = await Blog.findAll({where: {
            title: { [Op.iLike]: `%${title}%` },
          },})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {
GetAllBlogs,
CreateBlogs,
DeleteBlogs,
GetOneBlogs,
UpdateBlogs,
SearchBlogs
}