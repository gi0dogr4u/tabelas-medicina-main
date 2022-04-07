const Sequelize = require('sequelize');
const database = require('../db');

const TipoExame = database.define('tb_tipoExame', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_exame: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cd_tipo_exame: Sequelize.INTEGER,
    tipo_resultado: Sequelize.STRING
}, {freezeTableName: true})

module.exports = TipoExame;