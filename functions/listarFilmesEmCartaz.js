const listarFilmes = require("./listarTodosOsFilmes")

module.exports = (catalogo) => {
    let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz)
    listarFilmes(filmesEmCartaz)
}