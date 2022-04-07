const Sequelize = require('sequelize');
const database = require('../db');

const Mensagem = database.define('tb_mensagem', {
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
    status_mensagem_cd_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_status_mensagem', key: 'cd_status'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    tipo_mensagem_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_tipo_mensagem', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    data_emissao: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = Mensagem;