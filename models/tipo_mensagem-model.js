const Sequelize = require('sequelize');
const database = require('../db');

const TipoMensagem = database.define('tb_tipo_mensagem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mensagem: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = TipoMensagem;