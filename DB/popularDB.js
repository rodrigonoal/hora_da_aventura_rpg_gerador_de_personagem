const knex = require("./knex");

const atributos = require("../Datasets/atributos")
const proezas = require("../Datasets/proezas")
const especificacoes = require("../Datasets/especificacoes")

const cleanup = () => {
    for (let proeza of proezas) {
        if (proeza.descricao.charAt(proeza.descricao.length - 1) != ".") {
            proeza.descricao = proeza.descricao + "."
        }
        if (proeza.especifica) {
            const esp = especificacoes.find(esp => esp.proeza === proeza.nome);
            proeza.especificacao = esp.especificacao;
        }
    }
    console.log("Descriptions cleaned up")
    return
}

const popularDb = async () => {
    try {
        await knex("proezas")
            .where("nome", "!=", "")
            .del()

        await knex("atributos")
            .where("nome", "!=", "")
            .del()

        await knex.raw("ALTER SEQUENCE atributos_id_seq RESTART WITH 1; ALTER SEQUENCE proezas_id_seq RESTART WITH 1;")

        for (let atributo of atributos) {
            await knex("atributos").insert(atributo)
        }

        const atbArray = await knex.select("id", "nome").table('atributos');

        for (let proeza of proezas) {
            proeza.atributoid = atbArray.find(atb => atb.nome === proeza.atributo).id
            delete proeza["atributo"];

            await knex("proezas").insert(proeza)
        }
    } catch (error) {
        console.log(error);
        return false;
    }
    console.log("All objects inserted!")
    return
}

cleanup();
popularDb().then(() => process.exit())