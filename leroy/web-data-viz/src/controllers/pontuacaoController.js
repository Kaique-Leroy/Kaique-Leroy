var pontuacaoModel = require("../models/pontuacaoModel");

function cadastrar(req, res) {
    var pontuacao = req.body.pontuacao;
    var totalQuestoes = req.body.totalQuestoes;
    var fkUsuario = req.body.fkUsuario;

    pontuacaoModel.cadastrar(pontuacao, totalQuestoes, fkUsuario).then((resultado) => {
        res.status(201).json(resultado);
    }).catch((erro) => {
        console.error(erro);
        res.status(500).json({ mensagem: "Houve um erro ao tentar registrar a pontuação." });
    });
}


function listar(req, res) {
    const { idJogador } = req.params

    pontuacaoModel.listar(idJogador).then((resultado) => {
        res.status(200).json(resultado);
    }).catch((erro) => {
        console.error(erro);
        res.status(500).json({ mensagem: "Houve um erro ao tentar listar as pontuações." });
    });
}

function listarTabela(req, res){
    pontuacaoModel.listarTabela().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((erro) => {
        console.error(erro);
        res.status(500).json({ mensagem: "Houve um erro ao tentar listar as pontuações." });
    });
}


module.exports = {
    cadastrar,
    listar,
    listarTabela
};
