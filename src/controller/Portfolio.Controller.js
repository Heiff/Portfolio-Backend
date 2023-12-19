const Portfolio = require('../model/PortfolioModel');
const fs = require('fs').promises
const { v4:uuid } = require("uuid");

const GetAllPortfolio = async(req,res) =>{
    try {
        const { page, size } = req.query;
        const data = await Portfolio.findAndCountAll({
            limit:size,
            offset:page ? page * size : page 
        })
        res.status(200).json([data.rows,{totalPage:Math.ceil(data.count / size)}])
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const CreatePortfolio = async(req,res) =>{
    try {
        const { title,date } = req.body;
        const { image } = req.files;
        const imageName = `${uuid()}.${
            image.name.split(".")[image.name.split(".").length - 1]
          }`;
        await Portfolio.create({title,image:imageName,date})
        image.mv(process.cwd() + `/uploads/${imageName}`);
        res.status(201).json({message:"succes creates"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const UpdatePortfolio = async(req,res) =>{
    try {
        const { title,date } = req.body;
        const { image }  = req.files ? req.files : ""
        const { id } = req.params;
        const data = await Portfolio.findByPk(id)
        const checktitle = title == 'undefined' ? data.title : title; 
        const checkdate = date == 'undefined' ? data.descr : date;
        if (image && image !== "") {
            await fs.unlink(process.cwd() + `/uploads/${data.image}`)
            const imageName = `${uuid()}.${
                image.name.split(".")[image.name.split(".").length - 1]
              }`;
              image.mv(process.cwd() + `/uploads/${imageName}`);
              await Portfolio.update({title:checktitle,date:checkdate,image:imageName},{where:{id}})
              res.status(200).json({message:"succes update"});
        }
          else{
            await Portfolio.update({title:checktitle,date:checkdate},{where:{id}})
            res.status(200).json({message:"succes update"});
          }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const DeletePortfolio = async(req,res) =>{
    try {
        const { id } = req.params;
        await Portfolio.destroy({where:{id}})
        res.status(200).json({message:"succes deleting"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
GetAllPortfolio,
CreatePortfolio,
DeletePortfolio,
UpdatePortfolio
}