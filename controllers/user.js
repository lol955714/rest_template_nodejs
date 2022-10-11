const { Response, response}  = require('express');
const bcrypt =require('bcryptjs');
const Usuario=require('../models/usuario');
const usuariosGet = async(req, res=response)=>{
    const {limite=5, desde=0}=req.query;
    const queary={estado:true};
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(queary),
        Usuario.find(queary).limit(Number(limite))
                                .skip(Number(desde))
    ])
    res.json({
        total, usuarios
    });
}
const usuariosPost = async (req, res=response)=>{
    let {nombre, correo, password}=req.body;
    const salt=bcrypt.genSaltSync();
    password=bcrypt.hashSync(password, salt);
    const usuario=await  Usuario.create(
       { 
           nombre, 
           correo, 
           password, 
           username
        }
    );
    res.json(usuario);
}
const usuariosPut = async(req, res=response)=>{
    const {id} = req.params;
    const {_id,password, google, correo, ...resto}=req.body;
    if(password){
        const salt=bcrypt.genSaltSync();
        resto.password=bcrypt.hashSync(password, salt);
    }
    const usuario= await Usuario.findByIdAndUpdate(id, resto);
    res.json(usuario);
}
const usuariosDelete = async(req, res=response)=>{
    const {id} = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, { estado:false } );
    res.json({
        usuario
    });
}
module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}