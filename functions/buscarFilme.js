const catalogo = require("../database/catalogo.json")

module.exports = (codigo) => {
    let filmeProcurado = catalogo.find(filme => filme.codigo == codigo)
    return filmeProcurado
}

