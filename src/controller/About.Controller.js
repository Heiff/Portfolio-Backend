const About = require("../model/AboutModel");

const GetAll = async(req,res) => {
    try {
        const data = await About.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const CreateAbout = async(req,res) => {
    try {
        const { aboutme,firstname,lastname,birthday,notionality,freelance,phone,address,email,language,github } = req.body;
        parseInt(phone)
        const data = await About.findAll();
        if (data.length)   res.status(404).json({message:"uje yest"});
        else{
            await About.create({aboutme,firstname,lastname,birthday,notionality,freelance,phone,address,email,language,github})
            res.status(201).json({message:"succes"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const UpdateAbout = async(req,res) =>{
    try {
        const { aboutme,firstname,lastname,birthday,notionality,freelance,phone,address,email,language,github } = req.body; 
        const id = 1
        await About.update({aboutme,firstname,lastname,birthday,notionality,freelance,phone,address,email,language,github},{where:{id}})
        res.status(200).json({message:"succes"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}



module.exports = {
    GetAll,
    CreateAbout,
    UpdateAbout,
}