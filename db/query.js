import {sequelize} from './config.js';

const queryRun = (sql)=>{
    const [results, metadata] = await sequelize.query(sql);
}