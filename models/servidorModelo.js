const express = require(`express`);
const { conectarBD } = require('../database/conexion.js')
 
class ServidorModelo{

     constructor(){

            this.app = express();
            this.llamarRutas();
            this.levantarBD();

     }

     levantarServidor (){
         app.listen(process.env.PUERTO,function(){

        console.log("Servidor Encendido en el puerto: " + process.env.PUERTO);
        });

      }

      levantarBD(){

        conectarBD();

      }

      llamarRutas(){

           this.app.get('/facturas',  function (req, res) {
            res.send('Buenas tardes Valeria');
        });

           this.app.post('/facturas/nuevo', function (req, res) {
            res.send('Buenas tardes Valeria');
        });

           this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Buenas tardes Valeria');
        });

           this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Buenas tardes Valeria');
        });
        
         }

    }



module.exports=ServidorModelo