const Sequelize = require('sequelize');
const database = require('../db');

const EvolucaoClinica = database.define('tb_evolucao_clinica', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_evolucao_clinica', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    data_evolucao: Sequelize.DATE,
    assunto: Sequelize.TEXT,
    observacao: Sequelize.TEXT,
    area_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = EvolucaoClinica;