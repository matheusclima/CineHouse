const listarTodosOsFilmes = require("./functions/listarTodosOsFilmes")
const buscarFilme = require("./functions/buscarFilme")
const adicionarFilme = require("./functions/adicionarFilme")
const alterarStatusEmCartaz = require("./functions/alterarStatusEmCartaz")
const listarFilmesEmCartaz = require("./functions/listarFilmesEmCartaz")
const salvarFilmes = require("./functions/salvarFilmes")
var catalogo = require("./database/catalogo.json")

var cinema = 'CineHouse'
var acao = process.argv[2]
let codigo = process.argv[3]


switch (acao) {

    case "listar":
        listarTodosOsFilmes(catalogo)
        break

    case "buscar":
        let filmeProcurado = buscarFilme(codigo)
        console.table(filmeProcurado)
        break

    case "adicionar":
        adicionarFilme({titulo: "Robocop"})
        break

    case "alterarStatus":
        alterarStatusEmCartaz(codigo)
        break

    case "emCartaz":
        listarFilmesEmCartaz(catalogo)
        break

    case "salvarFilmes":
        console.log("Salvar filmes")
        break

    default:
        console.error("Comando não encontrado")

}