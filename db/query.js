const { sequelize } = require('../db/config');

const queryRun = async (sql) => {
    let response = '';
    try {
        const [results] = await sequelize.query(sql);
        response = results;
    } catch (error) {
        console.log(error);
        response = error.message;
    }
    return response;
}
module.exports = {
    queryRun
};