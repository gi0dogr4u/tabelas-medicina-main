const HistoricoTratamento = require('./models/historico_tratamento-model');
const database = require('./db/db');
const express = require('express');
const app = express();
const path = require('path');
const AcessoVascular = require('./models/acesso_vascular-model');
const AvaliacaoAntropometrica = require('./models/avaliacao_antropometrica-model');
const BateriaExame = require('./models/bateria_exame-model');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.json());
 
// Histórico Exames
app.post('/historico_tratamento', async (req, res) => {
    let {paciente_id, data_inicio_tratamento, observacoes} = req.body;

    if(!connectDB())
        res.status(500).send('Ocorreu um erro na conexão com o banco');

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


// Acesso Vascular
app.post('/acesso_vascular', async (req, res) => {
    let {usuario_id, paciente_id, descricao} = req.body

    if(!connectDB())
        res.status(500).send('Ocorreu um erro na conexão com o banco');

    try {
        const resultCreat = await AcessoVascular.create({
            usuario_id, paciente_id, descricao
        })
    }catch(error) {
        console.log(error);
        res.status(500).send('Ocorreu um erro inesperado')
    }

    res.send('Enviado com Sucesso!');
})


// Avaliação Antropometrica
app.post('/avaliacao_antropometrica', async (req, res) => {
    let {paciente_id, data_avaliacao, peso, altura, pressao_arterial, medidas_corporeas} = req.body

    if(!connectDB())
        res.status(500).send('Ocorreu um erro na conexão com o banco');

    try {
        const resultCreat = await AvaliacaoAntropometrica.create({
            paciente_id, data_avaliacao, peso, altura, pressao_arterial, medidas_corporeas
        })
    }catch(error) {
        console.log(error);
        res.status(500).send('Ocorreu um erro inesperado')
    }

    res.send('Enviado com Sucesso!');
})


// Bateria Exame
app.post('/bateria_exame', async (req, res) => {
    let {pedido_exame_id, descricao} = req.body

    if(!connectDB())
        res.status(500).send('Ocorreu um erro na conexão com o banco');

        try {
            const resultCreat = await BateriaExame.create({
                pedido_exame_id, descricao
            })

        } catch(error) {
            console.log(error);
            res.status(500).send('Ocorreu um erro inesperado')
        }

    res.send('Enviado com Sucesso!');
})


//////////////////////////////////////////////

async function connectDB() {
    try {
        const result = await database.sync();
    }catch (error) {
       return false
    }
}

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});