const Admin = require("../model/AdminModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken")

const secret = process.env.Secret;

const Register = async(req,res) => {
    try {
        const { username,password } = req.body;
        console.log(req.body);
        const data = await Admin.findAll();
        if(data.length) res.status(404).json({message:"admin bor"})
        else{
            const pass = await bcrypt.hash(password,10);
            await Admin.create({username:username,password:pass});
            res.status(201).json({message:"successful"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const Login = async(req,res) => {
    try {
        const { username,password } = req.body;
        console.log(req.body);
        const data = await Admin.findOne({where:{username:username}});
        console.log(data);
        const compare = await bcrypt.compare(password,data.password);
        const token = await jwt.sign(data.id,secret)
        if (!compare) res.status(400).json({message:"password or login error"}) 
        else{
            res.status(200).json({token})}
    } catch (error) {
        res.status(500).json(error.message) 
    }
}


const isAuth = async(req,res,next) => {
    try {
        const { token } = req.headers;
        console.log(req);
        const id = await jwt.verify(token,secret);
        const data = await Admin.findByPk(id);
        if(!data) res.status(400).json({message:"error"});
        else{
            next()
        }
    } catch (error) {
        res.status(500).json(error.message) 
    }
}




module.exports = {
    Register,Login,isAuth
}