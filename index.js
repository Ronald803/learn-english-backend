const express = require('express');
const app = express();
const config = require('./config');
const router = require('./network/routes')


router(app);
app.listen(config.port, ()=>{
    console.log('La aplicacion está escuchando en http://localhost:'+config.port);
});

