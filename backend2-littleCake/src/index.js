const express = require('express') //llamamos a Express
const app = express()               
require('./database');




app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(require('./routes/crudNoticias'));



const port = process.env.PORT || 8080  // establecemos nuestro puerto

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)