const { queryRun } = require('../db/query');
const getUserQuery = async (req, res) => {
    const results  = await queryRun("select * from Users");
    res.json({
        results,
    });
}
const obtenerSensores = async (req, res)=>{
    const results  = await queryRun("select * from sensores");
    res.json({
        results,
    });
}
module.exports = {
    getUserQuery,
    obtenerSensores
};