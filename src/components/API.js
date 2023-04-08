import axios from "axios";


const apiKey = import.meta.env.VITE_MY_API_KEY ;
const api = {
  getPlayer: async (playerName) => {
    try {
      const response = await axios.get(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${apiKey}`);
      // console.log(response.data.puuid)
      return response.data;
    } catch (error) {
      // console.error(error);
      return null;
    }
  },  
  getMatches: async (puuid) => {
    try {
      const response = [];
      const matchIds = await axios.get(`https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=12&api_key=${apiKey}`);
      // console.log(matchIds.data);
      await Promise.all(matchIds.data.map(async (matchId) => {
        const ans = await axios.get(`https://sea.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`);
        // console.log(ans.data.metadata);
        response.push(ans.data);
      }));
      return response;
    } catch (error) {
      return null;
    }
  },
  getProfileIcon: (Id) => {
    return `http://ddragon.leagueoflegends.com/cdn/13.6.1/img/profileicon/${Id}.png`;
  }
};

export default api;