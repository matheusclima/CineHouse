module.exports = filmes => {
    console.table(filmes.map(filme => {
        return {
            codigo: filme.codigo,
            titulo: filme.titulo,
            duracao: filme.duracao,
            emCartaz: filme.emCartaz ? "Sim":"Não"
        }
    }))
}