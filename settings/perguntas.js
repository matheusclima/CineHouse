const acoes = require("./acoes")

module.exports = [
    {
        type: "list",
        name: "acao",
        message: "O que deseja fazer?",
        choices: Object.values(acoes)
    },
    {
        type: "number",
        name: "codigo",
        message: "Digite o código do filme que deseja buscar:",
        when: ans => ans.acao === acoes.buscar
    },
    {
        type: "input",
        name: "codigo",
        message: "Digite o codigo do filme:",
        when: ans => ans.acao === acoes.adicionar
    },
    {
        type: "input",
        name: "titulo",
        message: "Digite o título do filme:",
        when: ans => ans.acao === acoes.adicionar
    },
    {
        type: "number",
        name: "anoDeLancamento",
        message: "Digite o ano de lançamento do filme:",
        when: ans => ans.acao === acoes.adicionar
    },
    {
        type: "number",
        name: "duracao",
        message: "Digite a duração do filme em minutos:",
        when: ans => ans.acao === acoes.adicionar
    },
    {
        type: "confirm",
        name: "emCartaz",
        message: "O filme está em cartaz?",
        when: ans => ans.acao === acoes.adicionar
    },
    {
        type: "input",
        name: "codigo",
        message: "Digite o código do filme: ",
        when: ans => ans.acao === acoes.alterarStatus
    }
]