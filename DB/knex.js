require('dotenv').config()

const atributos = require("../Datasets/atributos")
const proezas = require("../Datasets/proezas")
const especificacoes = require("../Datasets/especificacoes")


const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
});

function cleanup() {
    for(let proeza of proezas) {
        if(proeza.descricao.charAt(proeza.descricao.length-1) != "."){
            proeza.descricao = proeza.descricao + "."
        }
        if(proeza.especifica) {
            const esp = especificacoes.find(esp => esp.proeza === proeza.nome);
            proeza.especificacao = esp.especificacao;
        }
    }
    console.log("Descriptions cleaned up")
    return
}

async function populateDb() {
    try {
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
populateDb();

module.exports = knex;
