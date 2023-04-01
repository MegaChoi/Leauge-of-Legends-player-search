import axios from "axios";


const apiKey = "RGAPI-5e436d11-5ab3-4af3-917d-33c6fde59af5";
const api = {
  getPlayer: (playerName) => {
    return axios.get(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${apiKey}`);
  },
  getMatches: (puuid) => {
    console.log(puuid);
    return axios.get(`https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=12&api_key=${apiKey}`)
  },
  getProfileIcon: (Id) => {
    return `http://ddragon.leagueoflegends.com/cdn/13.6.1/img/profileicon/${Id}.png`;
  }
};

export default api;