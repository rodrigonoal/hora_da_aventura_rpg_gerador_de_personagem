const numeroAleatorio = require("../Funcoes/numeroAleatorio");

module.exports = class Personagem {
    nome = "";
    conceito = "";
    saudeMaxima = 0;
    pontosDeHeroi = 0;
    estado = [];
    equipamento = [];
    atributos = [];
    proezas = [];
    defeito = {
        tipo: "", //defeito enum
        descricao: ""
    };
    ultimaRolagem = {};

    rolarAtributo(nomeAtributo, dificuldade) {
        let dados = this.atributos[nomeAtributo];
        let resultados = { sucessosMagnificos: 0, sucessos: 0, falhas: 0 };

        console.log(`${this.nome} rola ${dados} de ${nomeAtributo}! Dificuldade: ${dificuldade}`)

        while (dados > 0) {
            const resultado = numeroAleatorio(1, 6);

            if (resultado < 4) {
                resultados.falhas++
            } else if (resultado === 6) {
                resultados.sucessosMagnificos++
            } else {
                resultados.sucessos++
            }

            dados--
        }

        this.ultimaRolagem = resultados;

        let sucessosTotais = resultados.sucessosMagnificos + resultados.sucessos;
        let acerto = sucessosTotais > dificuldade;

        console.log(`O teste deu ${acerto ? "certo" : "errado"}!\n${this.nome} obteve ${sucessosTotais} sucessos no total, sendo ${resultados.sucessosMagnificos} magnífico${resultados.sucessosMagnificos === 1 ? "" : "s"}!`);
    };

    // constructor(personagem) {
    //     nome = this.personagem.nome;
    //     conceito = this.personagem.conceito;
    //     saudeMaxima = this.personagem.saude;
    //     pontosDeHeroi = this.personagem.pontosDeHeroi;
    //     estado = this.personagem.estado;
    //     equipamento = this.personagem.equipamento;
    //     atributos = this.personagem.atributos;
    //     proezas = this.personagem.proezas;
    //     defeito = this.personagem.defeito;
    // };
}
