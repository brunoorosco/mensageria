var SequelizeAuto = require('sequelize-auto')

//if you want to use with specified options
var auto = new SequelizeAuto('slab', 'brunoorosco', '123456', {
    host: 'localhost',
    dialect:  'mysql', //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql', but install perticular dialect
    directory: false, // prevents the program from writing to disk
    port: '3306',
    additional: {
        timestamps: false
        //...
    },
    //tables:['table1', 'table2', 'table3']
    //...
})


auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
 // console.log(auto.foreignKeys); // foreign key list
});

 