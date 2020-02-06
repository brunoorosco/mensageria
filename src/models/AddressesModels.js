const db = require('../config/db')

const Addresses = db.sequelize.define('addresses', {
    addr_id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
    },
    user_id:
    {
        type: db.Sequelize.INTEGER,
    },
    number:
    {
        type: db.Sequelize.STRING,
    },
    street:
    {
        type: db.Sequelize.STRING,
    }
}, {
    // source_table: 'phptips',
    // source_schema: 'phptips',
    //tableName: 'users',
    timestamps: false,

}
)


module.exports = Addresses;