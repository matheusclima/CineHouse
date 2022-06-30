const catalogo = require("../database/catalogo.json")

module.exports = (codigo) => {
    let filmeProcurado = catalogo.find(filme => filme.codigo == codigo)
    if(filmeProcurado) {
        return filmeProcurado
    } else {
        console.log("Filme não existe no catálogo")
    }
}

