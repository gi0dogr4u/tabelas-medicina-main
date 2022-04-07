const Sequelize = require('sequelize');
const database = require('../db');

const Cid = database.define('tb_cid', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cod_cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = Cid;