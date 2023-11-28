const Sequelize = require('sequelize');
const sequelize = new Sequelize('company', 'root', 'internship', {
  dialect: 'mysql',
  host: 'localhost'

})

module.exports = sequelize;