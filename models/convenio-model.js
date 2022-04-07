const Sequelize = require('sequelize');
const database = require('../db');

const Convenio = database.define('tb_convenio', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome_convenio: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = Convenio;