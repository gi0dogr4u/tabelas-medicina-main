const Sequelize = require('sequelize');
const database = require('../db/db');

const HistoricoExame = database.define('tb_historico_exame', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //references: {model: 'tb_paciente', key: 'id'},
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
    },
    data_inicio_tratamento: Sequelize.DATEONLY,
    observacao: Sequelize.STRING
}, {freezeTableName: true})

module.exports = HistoricoExame;