const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('1tdb', 'root', 'ABC1efg22001q', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;