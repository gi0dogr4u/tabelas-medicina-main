const Sequelize = require('sequelize');
const database = require('../db');

const Esquema = database.define('tb_esquema', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_capilar_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_tipo_capilar', key: 'id'},
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
    dias_sessao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_dias_sessao', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    data_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    data_fim: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    id_modelo_capilar: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {freezeTableName: true});

module.exports = Esquema;