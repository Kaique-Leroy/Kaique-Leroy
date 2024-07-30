var database = require("../database/config");

function cadastrar(pontuacao, totalQuestoes, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO pontuacao (pontuacao, totalQuestoes, fkUsuario) 
        VALUES (${pontuacao}, ${totalQuestoes}, ${fkUsuario})
    `;
    return database.executar(instrucaoSql);
}

function listar(idJogador) {
    var instrucaoSql = `
        SELECT pontuacao ,DATE_FORMAT(data, '%d/%m/%Y') AS data
        FROM pontuacao
        WHERE fkUsuario = '${idJogador}'
        ORDER BY data
    `;

    return database.executar(instrucaoSql);
}

function listarTabela(){
    var instrucaoSql = `
    SELECT 
    u.nome, 
    MAX(p.pontuacao) AS pontuacao
FROM 
    usuario u
JOIN 
    pontuacao p ON u.id = p.fkUsuario
GROUP BY 
    u.id, u.nome
ORDER BY 
    pontuacao DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    listarTabela
};
