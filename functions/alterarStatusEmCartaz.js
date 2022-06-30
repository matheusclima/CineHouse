const buscarFilme = require("./buscarFilme")
const salvarFilmes = require("./salvarFilmes")
var catalogo = require("../database/catalogo.json")

module.exports = codigo => {
    let filme = buscarFilme(codigo)
    let index = catalogo.indexOf(filme)

    if(filme) {
        catalogo[index].emCartaz = !catalogo[index].emCartaz
    } else {
        console.log("Filme não encontrado")
    }

    salvarFilmes(catalogo)
}
