const numeroAleatorio = require("./numeroAleatorio");

const embaralharArray = (array) => {
    const copyArray = [...array];
    const novoArray = [];

    for(let i = 0; i < array.length; i++){
        const aleatorio = numeroAleatorio(0, copyArray.length);
        novoArray[i] = copyArray[aleatorio];
        copyArray.splice(aleatorio, 1);
    }

    return novoArray;
}

module.exports = embaralharArray;