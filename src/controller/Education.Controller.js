const Education = require('../model/EducationModel');

const GetAllEducation = async(req,res) => {
    try {
        const data = await Education.findAll();
        res.status(200).json(data) 
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const CreateEducation = async(req,res) => {
    try {
        const { from,date,descr } = req.body;
        await Education.create({from,date,descr});
        res.status(201).json({message:"succes"});
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const UpdateEducation = async(req,res) => {
    try {
        const { id } = req.params;
        const { from,date,descr } = req.body;
        await Education.update({from,date,descr},{where:{id}});
        res.status(200).json({message:"succes upd"});
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const DeleteEducation = async(req,res) => {
    try {
        const { id } = req.params;
        await Education.destroy({where:{id}});
        res.status(200).json({message:"succes delete"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}



module.exports = {
    GetAllEducation,
    CreateEducation,
    UpdateEducation,
    DeleteEducation
}