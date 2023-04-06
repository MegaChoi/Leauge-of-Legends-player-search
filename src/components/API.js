import axios from "axios";


const apiKey = "RGAPI-1cfa2f4c-cc27-4c19-9ff5-0b7d950098a5";
const api = {
  getPlayer: async (playerName) => {
    try {
      const response = await axios.get(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${apiKey}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
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