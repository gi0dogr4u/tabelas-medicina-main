const Sequelize = require('sequelize');
const database = require('../db');

const UsuarioHasFuncao = database.define('tb_usuario_has_tb_funcao', {
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_usuario', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    funcao_id: {
        type: Sequelize.INTEGER,
       allowNull: false,
       references: {model: 'tb_funcao', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    ds_data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = UsuarioHasFuncao;