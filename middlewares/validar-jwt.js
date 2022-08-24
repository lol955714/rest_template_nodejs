const {Response} = require('express');
const jwt = require('jsonwebtoken');
const usuario = require('../models/usuario');
const validarjwt=async(req, res=Response, next)=>{
    const token =req.header('ola');
    if(!token){
        return res.status(401).json({
            msg: "no hay token"
        });
    }
    try {
        const {uid}=jwt.verify(token, process.env.SECRET_KEY);
        const usuarioAutenticado=await usuario.findById(uid);
        if(!usuario){
            return res.status(401).json({
                msg: "usuario no existe"
            });
        }
        if(!usuario.estado==false){
            return res.status(401).json({
                msg: "usuario desactivado"
            });
        }
        req.usuarioAutenticado=usuarioAutenticado;
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "token invalido"
        });
    }
}
module.exports ={
    validarjwt
}