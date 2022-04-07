const Sequelize = require('sequelize');
const database = require('../db');

const Exame = database.define('tb_exame', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    bateria_exame_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_bateria_exame', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    descricao: Sequelize.TEXT,
    resultado: Sequelize.TEXT,
    data: Sequelize.DATE
}, {freezeTableName: true})

module.exports = Exame;