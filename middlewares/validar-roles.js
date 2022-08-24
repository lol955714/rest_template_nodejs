const {Response} = require('express');
const esAdminRole=(req, res=Response)=>{
    if(!req.usuarioAutenticado){
        return res.status(500).json({
            msg: "se verifica rol sin validar token"
        });
    }
    const { rol, nombre } = req.usuarioAutenticado;
    if (rol!=='ADMIN_ROLE'){
        res.status(401).json({
            msg:"no tiene permisos para borrar usuarios"
        });
    }
    next();
}
const tieneRol=(...roles)=>{
    return (req, res=response, next)=>{
        if (!roles.includes(req.usuarioAutenticado.rol)){
            res.status(401).json({
                msg:`no tiene permisos rol para borrar ${roles}`
            });
        }
        next();
    }
}
module.exports={
    esAdminRole,
    tieneRol
}