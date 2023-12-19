const Skills = require('../model/SkillsModel');

const GetAllSkills = async(req,res) => {
    try {
        const data = await Skills.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const CreateSkills = async(req,res) => {
    try {
        const data = await Skills.findAll();
        const { skills } = req.body;
        if(data.length) res.status(400).json({message:"skills bor"})
        else{
        await Skills.create({skills});
        res.status(201).json({message:"succes"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const UpdateSkills = async(req,res) => {
    try {
        const { id } = req.params
        const { skills } = req.body;
        await Skills.update({skills},{where:{id}})
        res.status(200).json({message:"succes upd"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const DeleteSkills = async(req,res) => {
    try {
        const { id } = req.params;
        await Skills.destroy({where:{id}})
        res.status(200).json({message:"succes delete"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    GetAllSkills,
    CreateSkills,
    UpdateSkills,
    DeleteSkills
}