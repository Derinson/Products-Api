const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Aspectos de Configuración
const { config } =require('./config/index');
//Rutas de mi Aplicación (Controladores)
const moviesApi = require('./routes/productsRoutes.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use('/products', moviesApi);

app.listen(config.port, function(){
    console.log(`Escuchando en el puerto http://localhost:${config.port}`);
});

