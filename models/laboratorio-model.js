const Sequelize = require('sequelize');
const database = require('../db');


const Laboratorio = database.define('tb_laboratorio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_laboratorio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: Sequelize.STRING(100),
    telefone: Sequelize.STRING(12),
    cep: Sequelize.STRING(12),
    email: Sequelize.STRING(100)
}, {freezeTableName: true})

module.exports = Laboratorio;