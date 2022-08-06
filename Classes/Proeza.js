module.exports = class Proeza {
    nome = "";
    descricao = "";
    especificidade = "";
    atributo = "";
    magica = false;
    poderosa = false;
    especifica = false;

    constructor(proeza) {
        nome = proeza.nome;
        descricao = proeza.descricao;
        especificidade = proeza.especificidade;
        atributo = proeza.atributo; 
        magica = proeza.magica;
        poderosa = proeza.poderosa;
        especifica = proeza.especifica;
    }
}