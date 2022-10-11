const { DataTypes } = require('sequelize');
const {sequelize } = require ('../db/config.js');

const User = sequelize.define('User', {
    nombre:{
        type: DataTypes.STRING, 
        required: [true, 'ponele nombre']
    },
    correo:{
        type: DataTypes.STRING,
        required:[true, 'ponele correo'],
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        required:[true, 'ponele contra']
    },
    username:{
        type: DataTypes.STRING,
    },
    estado:{
        type: DataTypes.BOOLEAN,
        default:true
    },
  }, {
    paranoid: true,
  });


module.exports={
    User
};