const Sequelize = require('sequelize');
let sequelize
try {
    const instance = new Sequelize(
        process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
        }
    );
    sequelize = instance;
} catch (error) {
    console.log(error.message);
}

module.exports = {
    sequelize
}