const bcrypt =require('bcryptjs');
const generarToken = require('../helpers/generarJsonWebToken');
const Usuario = require("../models/usuario").User;

const login =async(req, res)=>{
    const {correo, password}=req.body;
    const usuario = await Usuario.findOne(
        {
            where:
                {correo}
        });
    if(!usuario){
        return res.status(400).json({
            msg: 'Usuario/password no son'
        });
    }
    if(!usuario.estado){
        return res.status(400).json({
            msg: 'Usuario inactivo'
        });
    }
    const validador = bcrypt.compareSync(password, usuario.password);
    if(!validador){
        return res.status(400).json({
            msg: 'contraseña mala'
        });
    }
    const token = await generarToken(usuario.id);
    res.json({
        usuario,
        token
    });
}
module.exports={
    login
}