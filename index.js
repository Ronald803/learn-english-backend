const express = require('express');

const app = express();

app.use('/',function(req,res){
    res.send('hola esta es el backend de la app learn-english')
})

app.listen(3000);
console.log('La aplicacion está escuchando en http://localhost:3000');
