const express = require('express')
const app = express()

require('dotenv').config()
 
app.get('/', function (req, res) {
  res.send('Buenas tardes valeria')
})
 
app.listen(process.env.PUERTO,function(){
    console.log("servidor encendido " + process.env.PUERTO)
})