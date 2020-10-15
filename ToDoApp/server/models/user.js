const { DataTypes } = require('sequelize');
const applicationSequelizeObject = require('../db');

const applicationDatabaseObject = require('../db');

applicationDatabaseObject.define('user', {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = User;