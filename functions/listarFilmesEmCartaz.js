module.exports = (catalogo) => {
    let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz)
    console.table(filmesEmCartaz)
}