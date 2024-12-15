import Axios from 'axios';

const BASE_URL = '/api';

export const GameService = {

  searchGames: function(searchString, page = 1) {
    const url = `${BASE_URL}/games?search=${searchString}&page=${page}`;
    return Axios.get(url);
  },

  gameDetail: function(gameSummary) {
    const url = `${BASE_URL}/games/${gameSummary.guid}`
    return Axios.get(url);
  }

};