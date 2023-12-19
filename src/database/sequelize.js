const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:4121@localhost:5432/portfolio");

module.exports = sequelize;
