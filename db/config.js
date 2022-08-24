const { default: mongoose } = require("mongoose");

const dbConnection = async() =>{
    try {
        await mongoose.connect(
            process.env.MONGODB
        );
    } catch (error) {
        console.log(error);
        throw new Error("No hay base ");
    }
}
module.exports={
    dbConnection
}