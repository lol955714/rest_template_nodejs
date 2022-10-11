const jwt = require('jsonwebtoken');
const generarToken=(uid='')=>{
    return new Promise ((resolve, reject)=>{
        const payload = {uid};
        jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn:process.env.CADUCIDAD_TOKEN
        },(err, token)=>{
            if(err){
                console.log(err);
                reject('no se pudo');
            }else{
                resolve(token)
            }
        })
    });
}
module.exports=generarToken;