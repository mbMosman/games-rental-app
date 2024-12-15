import express from 'express';
import axios from 'axios';

const BASE_URL = 'https://www.giantbomb.com/api';
const API_KEY = process.env.GIANTBOMB_API_KEY;

const GamesRouter = express.Router();

/**
 * Search games
 * 
 * Example url: /games?search=gameTitle&page=1
 * 
 * Requires query string with fields: search and page
 * If search is not included results in 400 (Bad Request)
 * If page is not included or not a number, uses default of 1
 */ 
GamesRouter.get('/', (req, res) => {

  const searchString = req.query.search;
  if (!searchString) {
    res.sendStatus(400)
  }
  const page = Number(req.query.page) || 1;

  // Fields limits the API response data
  const fields='deck,genres,guid,id,image,images,name,original_release_date';

  const url = `${BASE_URL}/search?api_key=${API_KEY}&format=json&resources=game&field_list=${fields}&query=${searchString}&page=${page}`;
  axios.get(url)
    .then((response) => {
      if (response.data.error === 'OK') {
        const result = {
          page_limit: response.data.limit,
          pages_available: Math.ceil(response.data.number_of_total_results / response.data.limit),
          page: page,
          offset: response.data.offset,
          results: response.data.results
        }
        res.send(result);
      } else {
        console.error(`Error searching games from API. URL: ${url}, Error:`, response.data.error);
        res.sendStatus(500);
      }
    })
    .catch( (err) => {
      console.error(`Error searching games from API. URL: ${url}, Error:`, err);
      res.sendStatus(500);
    })
});

/**
 * Game Detail
 * Example url: /games/guid
 */ 
GamesRouter.get('/:guid', (req, res) => {

  const id = req.params.guid;

  const url = `${BASE_URL}/games/${id}?api_key=${API_KEY}&format=json`;
  axios.get(url)
    .then((response) => {
      if (response.data.error === 'OK') {
        const result = response.data
        res.send(result);
      }
    })
    .catch( (err) => {
      console.error(`Error getting game from API. URL: ${url}, Error:`, err);
      res.sendStatus(500);
    })
});

export default GamesRouter;