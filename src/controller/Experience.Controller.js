const Experience = require('../model/ExperienceModel');


const GetAllExperience = async(req,res) =>{
    try {
        const data = await Experience.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const CreateExperience = async(req,res) =>{
    try {
        const { field,date,descr } = req.body;
        await Experience.create({field,date,descr});
        res.status(201).json({message:"succes"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const UpdateExperience = async(req,res) =>{
    try {
        const { field,date,descr } = req.body;
        const { id } = req.params;
        await Experience.update({field,date,descr},{where:{id}})
        res.status(200).json({message:"succes upd"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const DeleteExperience = async(req,res) =>{
    try {
        const { id } = req.params;
        await Experience.destroy({where:{id}})
        res.status(200).json({message:"succes delete"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    GetAllExperience,
    CreateExperience,
    UpdateExperience,
    DeleteExperience
}