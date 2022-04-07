const Sequelize = require('sequelize');
const database = require('../db');

const TipoCapilar = database.define('tb_tipo_capilar', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_tipo: {
        type: Sequelize.STRING(255),
        allowNull: false,
    }
}, {freezeTableName: true});

module.exports = TipoCapilar;