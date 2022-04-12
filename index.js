const HistoricoTratamento = require('./models/historico_tratamento-model');
const database = require('./db/db');
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post('/historico_tratamento', async (req, res) => {
    let {paciente_id, data_inicio_tratamento, observacoes} = req.body;

    try {
        const result = await database.sync();
    }catch (error) {
        res.status(500).send('Ocorreu um erro na conexão com o banco');
    }

    try {
        const resultCreat = await HistoricoTratamento.create({
            paciente_id, data_inicio_tratamento, observacoes
        })
    }catch(error) {
        console.log(error);
        res.status(500).send('Ocorreu um erro inesperado')
    }

    res.send('Enviado com Sucesso!');
});

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});