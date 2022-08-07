const numeroAleatorio = require("../Dados/numeroAleatorio");

const axios = require("axios").default;

const wordsApi = (categoria) => axios.create({
  method: 'GET',
  baseURL: 'https://wordsapiv1.p.rapidapi.com/words/',
  params: { partOfSpeech: `${categoria}`, random: true, hasDetails: "inCategory" },
  headers: {
    'X-RapidAPI-Key': 'd56b84a6c9mshbdd65ee792a5033p136f37jsnb65882638478',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
});

wordsApi("adjective").get().then(response => {
  console.log(response.data.word)
})

module.exports = wordsApi;