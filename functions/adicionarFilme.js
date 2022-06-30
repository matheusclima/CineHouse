const salvarFilmes = require("./salvarFilmes")
var catalogo = require("../database/catalogo.json")

module.exports = (filme) => {
    catalogo.push(filme)
    salvarFilmes(catalogo)
}