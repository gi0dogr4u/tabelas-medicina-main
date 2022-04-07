const Sequelize = require('sequelize');
const database = require('../db');

const DiasSessao = database.define('tb_dias_sessao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING(255),
        allowNull: false,
    }
}, {freezeTableName: true});

module.exports = DiasSessao;