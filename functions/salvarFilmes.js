const { writeFileSync } = require("fs")

module.exports = (filmes) => {
    
    let json = JSON.stringify(filmes, null, 4) 
    writeFileSync("./database/catalogo.json", json)
}