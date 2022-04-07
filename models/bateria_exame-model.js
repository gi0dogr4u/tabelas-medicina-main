const Sequelize = require('sequelize');
const database = require('../db');

const BateriaExame = database.define('tb_bateria_exame', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pedido_exame_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_pedido_exame', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    descricao: Sequelize.TEXT,
}, {freezeTableName: true})

module.exports = BateriaExame;