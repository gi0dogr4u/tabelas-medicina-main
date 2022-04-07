const Sequelize = require('sequelize');
const database = require('../db');

const Hemodialise = database.define('tb_hemodialise', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    esquema_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_esquema', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_usuario', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    data_sessao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora_fim: {
        type: Sequelize.TIME,
        allowNull: false
    },
    hora_inicio: {
        type: Sequelize.TIME,
        allowNull: false
    },
    peso_pre: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    peso_pos: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    responsavel: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    observacao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = Hemodialise;