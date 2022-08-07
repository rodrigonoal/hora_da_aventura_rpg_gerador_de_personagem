const axios = require("axios").default;

const randomApi = axios.create({
    baseURL: "https://random-data-api.com/api/",
    timeout: 1000
});

module.exports = randomApi;