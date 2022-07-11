const buscarFilme = require("./buscarFilme")
const salvarFilmes = require("./salvarFilmes")
var catalogo = require("../database/catalogo.json")

module.exports = codigo => {
    let filmeBuscado = buscarFilme(codigo)

    if(!filmeBuscado) {
        console.log("Filme não encontrado")   
        return
    }
    
    filmeBuscado.emCartaz = !filmeBuscado.emCartaz
    salvarFilmes(catalogo)

}
