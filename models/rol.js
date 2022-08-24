const { Schema, model} = require('mongoose');
const rolSchema = Schema ({
    rol:{
        type: String,
        required:[true, 'ponele nombre al rol']
    }
})
module.exports=model('Rol', rolSchema);