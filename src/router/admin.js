//aruivos de configuração
const fs = require('fs');

const filePath = './files/users.json';


//verifica se existe o arquivo no diretório indicado
const arquivo = fs.existsSync(filePath)
    ? fs.readFileSync(filePath) 
    : fs.writeFile('./files/users.json','',(err) => {
        if(err) return console.log('erro: ' + err)
    })


    // //Lendo todos os arquivos existenstes na pasta files de forma síncrona
    // fs.readdirSync('./files').forEach(file => {
    //     //Efetuando a leitura do arquivo
    //     fs.readFile('./files/' + file, 'utf8', function (err, data) {
    //         //Enviando para o console o resultado da leitura
    //         console.log(data);
    //     });
    // })

// fs.writeFile("exemplo.txt",'', (err) => { //esta função cria um arquivo
//     if(err) return console.log('erro: '+err)
// })
// res.status(201).send("criado com sucesso")

const admin = (app) => {
    app.route('/admin')
        .get((req, res) => {
            res.send("sucesso")
        })
}

module.exports = admin;

