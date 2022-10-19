const {Response} = require('express');
const jwt = require('jsonwebtoken');
const usuario = require('../models/usuario').User;
const validarjwt=async(req, res=Response, next)=>{
    const token =req.header('token');
    if(!token){
        return res.status(401).json({
            msg: "no hay token"
        });
    }
    try {
        const {uid}=jwt.verify(token, process.env.SECRET_KEY);
        const usuarioAutenticado=await usuario.findByPk(uid);
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
            msg: "token invalido"+error.message
        });
    }
}
module.exports ={
    validarjwt
}