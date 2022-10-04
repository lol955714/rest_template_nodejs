const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.DB_HOST, 
    {
        dialect: process.env.DB_DIALECT,
        host: config.options.DB_HOST,
        port: config.options.DB_PORT,
    }
);

module.exports={
    sequelize
}