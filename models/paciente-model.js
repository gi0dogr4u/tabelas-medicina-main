const Sequelize = require('sequelize');
const database = require('../db');

const Paciente = database.define('tb_paciente', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    exame_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_exame', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    convenio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tb_convenio', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    nome: Sequelize.STRING,
    endereço: Sequelize.STRING,
    historico_clinico: Sequelize.TEXT,
    inicio_tratamento: Sequelize.DATE,
    cpf: Sequelize.STRING(12),
    telefone: Sequelize.STRING(10),
    celular: Sequelize.STRING(10),
    email: Sequelize.STRING(50),
    sexo: Sequelize.CHAR(1),
    cep: Sequelize.STRING(12),
    rg: Sequelize.STRING(11),
    data_nascimento: Sequelize.DATE 
}, {freezeTableName: true})

module.exports = Paciente;