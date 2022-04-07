const Sequelize = require('sequelize');
const database = require('../db');

const PacienteHasCid = database.define('tb_paciente_has_tb_cid', {
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_paciente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    cid_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_cid', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    ds_data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = PacienteHasCid;