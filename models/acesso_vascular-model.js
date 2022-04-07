const Sequelize = require('sequelize');
const database = require('../db');

const AcessoVascular = database.define('tb_acesso_vascular', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_usuario', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_paciente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    descricao: Sequelize.TEXT,
}, {freezeTableName: true})

module.exports = AcessoVascular;