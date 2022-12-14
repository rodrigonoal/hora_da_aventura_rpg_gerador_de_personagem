const fs = require('fs').promises;

const embaralharArray = require("./Funcoes/embaralharArray");
const Personagem = require("./Classes/Personagem");
const knex = require("./DB/knex");

const gerarPersonagem = async (forte = 5, medio = 4, fraco = 3, minimo = 2) => {
    const personagem = new Personagem();

    try {
        const atributosArray = await knex.select("id", "nome").table('atributos');
        const atributosEmbaralhados = embaralharArray(atributosArray);

        for (let i = 0; i < atributosEmbaralhados.length; i++) {
            switch (i) {
                case 0:
                    atributosEmbaralhados[i].valor = forte;
                    break;
                case 1:
                    atributosEmbaralhados[i].valor = medio;
                    break;
                case 2:
                    atributosEmbaralhados[i].valor = fraco;
                    break;
                default:
                    atributosEmbaralhados[i].valor = minimo
            }

            personagem.atributos.push(atributosEmbaralhados[i])

            // Define Proezas
            if (i <= 2) {
                let pontosDeProeza = i === 2 ? 1 : Math.round(personagem.atributos[i].valor / 2);
                const proezasArray = await knex.select().table('proezas').where({ atributoid: personagem.atributos[i].id });
                const proezasEmbaralhadas = embaralharArray(proezasArray);

                for (let j = 0; j < proezasEmbaralhadas.length && pontosDeProeza != 0; j++) {
                    // Cleanup de proezas
                    cleanupProeza(proezasEmbaralhadas[j], personagem.atributos[i]);

                    // Seleção
                    if (proezasEmbaralhadas[j].poderosa && (pontosDeProeza - 2) > 0) {
                        mago = proezasEmbaralhadas[j].nome === "Mago"

                        personagem.proezas.push(proezasEmbaralhadas[j]);
                        pontosDeProeza = pontosDeProeza - 2;
                        j++;

                    } else if (!proezasEmbaralhadas[j].poderosa) {
                        personagem.proezas.push(proezasEmbaralhadas[j]);
                        pontosDeProeza = pontosDeProeza - 1;

                    } else if (pontosDeProeza === 0) {
                        break;
                    }
                }
            }
            // Cleanup de atributos
            cleanupAtributo(personagem.atributos[i]);
        }

    } catch (error) {
        console.log(error);
        return;
    }

    // Cleanups de proezas e atributos
    function cleanupProeza (proeza, atributo) {
        if (!proeza.magica) {
            delete proeza["magica"];
        }
        if (!proeza.poderosa) {
            delete proeza["poderosa"];
        }
        if (!proeza.especifica) {
            delete proeza["especifica"];
            delete proeza["especificacao"];
        }
        proeza.atributo = atributo.nome;
        delete proeza["id"];
        delete proeza["atributoid"];
    }

    function cleanupAtributo (atributo) {
        delete atributo["id"];
    }

    console.log("Personagem gerado!")

    return personagem;
}

const salvarPersonagem = async (personagem) => {
    const nomeDoArquivo = "./personagensGerados.json"

    try {
        const data = await fs.readFile(nomeDoArquivo);
        const geradosArray = JSON.parse(data);

        geradosArray.push(personagem);

        await fs.writeFile(nomeDoArquivo, JSON.stringify(geradosArray));

        console.log("Personagem salvo!")

    } catch (error) {
        console.log(error)
        return
    }

    process.exit()
}

gerarPersonagem().then((personagem) => salvarPersonagem(personagem))

