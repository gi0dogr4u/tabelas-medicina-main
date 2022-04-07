const Sequelize = require('sequelize');
const database = require('../db');

const StatusMensagem = database.define('tb_status_mensagem', {
    cd_status: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = StatusMensagem;