var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/cadastrar", function (req, res) {
    pontuacaoController.cadastrar(req, res);
});

router.get("/listar-tabela", function (req, res) {
    pontuacaoController.listarTabela(req, res);
});

router.get("/listar/:idJogador", function (req, res) {
    pontuacaoController.listar(req, res);
}); 

module.exports = router;
