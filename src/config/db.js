const Sequelize = require('sequelize')

//Conexão com o banco de dados
const sequelize = new Sequelize('phptips', 'brunoorosco', '123456',{
    host:'localhost',
    dialect:'mysql',
    port: '3306',
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize

}