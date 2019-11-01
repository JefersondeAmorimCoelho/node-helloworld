const express = require('express');

// inicializa o app
const app = express();

var port = process.env.PORT || 3001;

// recebe um get e responde 
app.get('/',(req, res) => res.send('Hello World !!!'));


// ativa a escuta na porta 3001
app.listen (port, () => console.log ('App is running na porta ' + port));






