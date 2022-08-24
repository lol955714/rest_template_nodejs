const Rol = require('../models/rol');
const Usuario = require('../models/usuario');
const esRolValido=async(rol='')=>{
    const existeRol= await Rol.findOne({rol});
    if(!existeRol){
        throw new Error('No existe ese rol');
    }
}
const existeEmail=async(correo='')=>{
    const existeEmail= await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error("Ya existe el correo");
    }
}
const existeUsuarioId=async(id='')=>{
    const existeId= await Usuario.findById(id);
    if(!existeId){
        throw new Error("No existe este usuario");
    }
}
module.exports={
    esRolValido,
    existeEmail,
    existeUsuarioId
}