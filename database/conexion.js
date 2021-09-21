const mongooe = require('mongoose');

async function conectarBD(){

    try{

        await mongoose.connect(process.env.BASEDATOS);
        console.log("Exito cnectados a la base de daos");

    } catch(error){

        console.log(error);

    }

}

module.exports = { conectarBD }