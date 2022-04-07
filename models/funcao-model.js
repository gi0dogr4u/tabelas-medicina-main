const Sequelize = require('sequelize');
const database = require('../db');

const Funcao = database.define('tb_funcao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    funcao: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
}, {freezeTableName: true});

module.exports = Funcao;