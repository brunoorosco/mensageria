const express = require('express');

//ARQUIVOS COM TRATAMENTO DAS ROTAS
const admin = require('./routes/admin');
const users = require('./routes/users');

const app = express();
//PORTA DE ACESSO 
const port = 3000;

// ARQUIVOS DE ROTAS 
///// ROTA PARA ADM
admin(app)
///// ROTA PARA USERS
users(app)

app.get('/', (req, res) => {
    res.send("Pagina Principal");
})

app.listen(port, () => {
    console.log("servidor rodando");
})