const axios = require("axios");
require('dotenv').config();

const apiAuthAxios = axios.create({
  baseURL: "https://d18devmarketplace.meevodev.com",
  headers: {
    "Content-Type": "application/json"
  }
});

const apiAxios = axios.create({
    baseURL: "https://d18devpub.meevodev.com/publicapi/v1",
    headers: {
      "Content-Type": "application/json"
    }
  });

module.exports = {apiAxios , apiAuthAxios};