const Sequelize = require("sequelize");

const applicationSequelizeObject = new Sequelize("todo-db", "kyle", "password", {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = applicationSequelizeObject;