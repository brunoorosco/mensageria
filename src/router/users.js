const fs = require('fs')

const filePath = './files/users.json';

const users = (app) => {
    app.route('/users/:id')
    .get((req,res) => {
        fs.writeFileSync(filePath, JSON.stringify(req.params.id,null,'\t'))
        
        res.send("usuarios")
    })
}

module.exports = users