const numeroAleatorio = (min, max) => {
    return Math.floor((Math.random() * max) + min)
}

module.exports = numeroAleatorio;