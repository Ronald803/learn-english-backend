const express = require('express');
const cors = require('cors')
const app = express();
const config = require('./config');
const router = require('./network/routes')
const connectDB = require('./db')

connectDB(config.dbUrl);
app.use( cors() )
app.use(express.json())
router(app);
app.listen(config.port, ()=>{
    console.log('La aplicacion está escuchando en http://localhost:'+config.port);
});

