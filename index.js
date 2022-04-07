const database = require('./db');
const AcessoVascular = require('./models/acesso_vascular-model');
const AvaliacaoAntropometrica = require('./models/avaliacao_antropometrica-model');
const BateriaExame = require('./models/bateria_exame-model');
const Cid = require('./models/cid-model');
const Convenio = require('./models/convenio-model');
const DiasSessao = require('./models/dias_sessao-model');
const Esquema = require('./models/esquema-model');
const EvolucaoClinica = require('./models/evolucao_clinica-model');
const Exame = require('./models/exame-model');
const ExameFisico = require('./models/exame_fisico-model');
const Funcao = require('./models/funcao-model');
const Hemodialise = require('./models/hemodialise-model');
const HistoricoTratamento = require('./models/historico_tratamento-model');
const Hospitalizacao = require('./models/hospitalizacao-moodel');
const Laboratorio = require('./models/laboratorio-model');
const Mensagem = require('./models/mensagem-model');
const Paciente = require('./models/paciente-model');
const PacienteHasCid = require('./models/paciente_has_cid-model');
const PedidoExame = require('./models/pedido_exame-model');
const StatusMensagem = require('./models/status_mensagem-model');
const TipoCapilar = require('./models/tipo_capilar-model');
const TipoExame = require('./models/tipo_exame-model');
const TipoMensagem = require('./models/tipo_mensagem-model');
const Usuario = require('./models/usuario-model');
const UsuarioHasFuncao = require('./models/usuario_has_funcao-model');

(async () => {

    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }

    try {

        const result = await Usuario.create({
            nome: 'Clebinho', login: 'clebinho123', senha: '1241242', ativo: true, email: 'clebinho@gmail.com'
        })

        console.log(result);

    } catch (error) {
        console.log(error);
    }

})()