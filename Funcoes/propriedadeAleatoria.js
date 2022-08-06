const gerarNumeroAleatorio = require("./numeroAleatorio");

const propriedadeAleatoria = (obj) => {
    let propriedades = Object.keys(obj);
    
    propriedades = propriedades.filter((prop) => {
        return prop != "id" && prop != "uid"
    })

    return obj[propriedades[ gerarNumeroAleatorio(0, propriedades.length - 1)]];
};

module.exports = propriedadeAleatoria;