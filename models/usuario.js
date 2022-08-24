const { Schema, model} = require('mongoose');
const usuarioSchema = Schema ({
    nombre:{
        type: String, 
        required: [true, 'ponele nombre']
    },
    correo:{
        type: String,
        required:[true, 'ponele correo'],
        unique:true
    },
    password:{
        type: String,
        required:[true, 'ponele contra']
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required:[true, 'ponele rol'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type: Boolean,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    },
})
usuarioSchema.methods.toJSON=function(){
    const { __v, password,_id, ...user } = this.toObject();
    user.uid=_id;
    return user;
}
module.exports=model('Usuario', usuarioSchema);