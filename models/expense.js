const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category: {
        type: Sequelize.STRING,
        unique: true,
    },
    expense: {
        type: Sequelize.INTEGER
    }
})

module.exports = Expense;