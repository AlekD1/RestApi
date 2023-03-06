const sequelize = require('../DB');
const { DataTypes } = require('sequelize');


const Post = sequelize.define('author', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    // Other model options go here
    tableName: 'authors',
    timestamps: false
});

module.exports = Post;