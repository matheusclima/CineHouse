const listarTodosOsFilmes = require("./functions/listarTodosOsFilmes")
const buscarFilme = require("./functions/buscarFilme")
const adicionarFilme = require("./functions/adicionarFilme")
const alterarStatusEmCartaz = require("./functions/alterarStatusEmCartaz")
const listarFilmesEmCartaz = require("./functions/listarFilmesEmCartaz")
const inquirer = require("inquirer")
const perguntas = require("./settings/perguntas")
const acoes = require("./settings/acoes")
var catalogo = require("./database/catalogo.json")

var cinema = 'CineHouse'

const responseHandler = (response) => {
    switch (response.acao) {

        case acoes.listar:
            listarTodosOsFilmes(catalogo)
            break

        case acoes.buscar:
            let filmeProcurado = buscarFilme(response.codigo)
            if (filmeProcurado) {
                console.log(`Código: ${filmeProcurado.codigo}`)
                console.log(`Título: ${filmeProcurado.titulo}`)
                console.log(`Duração: ${filmeProcurado.duracao} min`)
                console.log(`Em Cartaz: ${filmeProcurado.emCartaz ? "Sim" : "Não"}`)
            } else {
                console.log("Filme não encontrado")
            }
            break

        case acoes.adicionar:
            let novoFilme = {
                titulo: response.titulo,
                anoDeLancamento: response.anoDeLancamento,
                duracao: response.duracao,
                emCartaz: response.emCartaz,
                atores: []
            }
            adicionarFilme(novoFilme)
            break   
        
        case acoes.alterarStatus:           
            alterarStatusEmCartaz(response.codigo)
            break

        case acoes.emCartaz:
            listarFilmesEmCartaz(catalogo)
            break

        case acoes.sair:
            console.clear()
            process.exit()

        default:
            console.log("Comando não encontrado")
    }
}

const run = async () => {
    console.clear()
    let response = await inquirer.prompt(perguntas)
    responseHandler(response)
}

run()