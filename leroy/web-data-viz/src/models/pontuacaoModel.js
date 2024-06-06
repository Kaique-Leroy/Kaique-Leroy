var database = require("../database/config");

function cadastrar(pontuacao, totalQuestoes, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO pontuacao (pontuacao, totalQuestoes, fkUsuario) 
        VALUES (${pontuacao}, ${totalQuestoes}, ${fkUsuario})
    `;
    return database.executar(instrucaoSql);
}

function listar() {
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
};
