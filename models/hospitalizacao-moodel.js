const Sequelize = require('sequelize');
const database = require('../db');

const Hospitalizacao = database.define('tb_hospitalizacao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_paciente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    nome_hospital: Sequelize.STRING,
    data_iinternacao: Sequelize.DATE,
    data_alta: Sequelize.DATE,
    observasao: Sequelize.TEXT
}, {freezeTableName: true})

module.exports = Hospitalizacao;