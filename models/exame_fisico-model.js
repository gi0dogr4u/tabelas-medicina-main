const Sequelize = require('sequelize');
const database = require('../db');

const ExameFisico = database.define('tb_exame_fisico', {
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
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_paciente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fundo_olhos: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    membro_inf_normal: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    membro_inf_edema: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    membro_inf_varizes: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    ausencia_pulso: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    femurais: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    popliteos: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    tribial_posterior: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    dorsais_pedis: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    ulceras: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    auc_pulmonar_mv: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    auc_pulmonar_ronco: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    auc_pulmonar_sibilo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    sopro: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    auc_cardiaca: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_exame: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    foco: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {freezeTableName: true});

module.exports = ExameFisico;