const Cotegory = require("../model/Cotegory");

const GetAllCotegory = async(req,res) => {
    try {
        const data = await Cotegory.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const CreateCotegory = async(req,res) => {
    try {
        const { name } = req.body;
        await Cotegory.create({name});
        res.status(201).json({message:"succes create"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const UpdateCotegory = async(req,res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        await Cotegory.update({name},{where:{id}})
        res.status(200).json({message:"succes update"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const DeleteCotegory = async(req,res) => {
    try {
        const { id } = req.params;
        await Cotegory.destroy({where:{id}})
        res.status(200).json({message:"succes delete"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    GetAllCotegory,
    CreateCotegory,
    UpdateCotegory,
    DeleteCotegory
}