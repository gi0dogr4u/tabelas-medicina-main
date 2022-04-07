const Sequelize = require('sequelize');
const database = require('../db');

const PedidoExame = database.define('tb_pedido_exame', {
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
    laboratorio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_laboratorio', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    descricao_grupo: Sequelize.STRING(100),
    exame_extra: Sequelize.STRING(12),
    data_coleta: Sequelize.STRING(12),
    resultado_exame: Sequelize.TEXT
}, {freezeTableName: true})

module.exports = PedidoExame;