const listarTodosOsFilmes = require("./functions/listarTodosOsFilmes")
const buscarFilme = require("./functions/buscarFilme")
const adicionarFilme = require("./functions/adicionarFilme")
const alterarStatusEmCartaz = require("./functions/alterarStatusEmCartaz")
const listarFilmesEmCartaz = require("./functions/listarFilmesEmCartaz")
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
        if(filmeProcurado) {
            console.log(`Código: ${filmeProcurado.codigo}`)
            console.log(`Título: ${filmeProcurado.titulo}`)
            console.log(`Duração: ${filmeProcurado.duracao}h`)
            console.log(`Em Cartaz: ${filmeProcurado.emCartaz ? "Sim":"Não"}`)
        } else {
            console.log("Filme não encontrado")
        }
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

    default:
        console.error("Comando não encontrado")
}