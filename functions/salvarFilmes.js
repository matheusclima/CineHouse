const fs = require("fs")
const catalogo = require("../database/catalogo.json")

module.exports = (filmes) => {
    
    let json = JSON.stringify(filmes, null, 4) 
    fs.writeFileSync("./database/catalogo.json", json)
}