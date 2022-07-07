module.exports = (catalogo) => {
    let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz)
    console.table(filmesEmCartaz.map(filme => {
        return {
            codigo: filme.codigo,
            titulo: filme.titulo,
            duracao: filme.duracao
        }
    }))
}