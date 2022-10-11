const User = require('../models/usuario');

const existeEmail=async(correo='')=>{
    const existeEmail= await User.findAll({
        where:{
            correo
        }
    });
    if(existeEmail){
        throw new Error("Ya existe el correo");
    }
}
const existeUsuarioId=async(id='')=>{
    const existeId= await User.findById(id);
    if(!existeId){
        throw new Error("No existe este usuario");
    }
}
module.exports={
    existeEmail,
    existeUsuarioId
}