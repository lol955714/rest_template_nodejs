const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{
    constructor(){
        this.app=express();
        this.port = process.env.PORT;
        this.midlewares();
        this.routes();
        this.conectar();
    }
    async conectar (){
        await dbConnection();
    }
    midlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use( express.json() );
    }
    routes(){
        this.app.use('/api/users',require('../routes/user'));
        this.app.use('/api/auth',require('../routes/auth'));
    }
    hey_listen(){
        this.app.listen(this.port,()=>{
            console.log("sirve", process.env.PORT);
        });
    }
}
module.exports=Server;