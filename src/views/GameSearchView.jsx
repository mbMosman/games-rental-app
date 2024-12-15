import { useState, useEffect } from 'react';
import { GameService } from '../services/GameService';

export default function GamesSearchView() {

  const [searchString, setSearchString] = useState('Civilization');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [availablePages, setAvailablePages] = useState(0);

  useEffect(() => {
    search();
  }, []);

  function search() {
    setIsLoading(true);

    GameService.searchGames(searchString, pageNumber)
      .then(response => {
        const data = response.data;
        setSearchResults(data.results);
        setPageNumber(data.page);
        setAvailablePages(data.pages_available);
        setIsLoading(false);
      })
      .catch(error => {
        handleError(error);
        setIsLoading(false);
      })
  }

  function handleError(error) {
    if (error) {
      console.log('Search error: ', error);
    }
    setErrorMessage('Error performing search, please try again.');
  }

  return (
    <div className="view">
      <h2 className="view-header">Select Games to Rent</h2>
      <form className="search-form">
        <div className="search-control">
          <input className="search-input" id="search" type="text" autoComplete="off" />
          <button type="reset">X</button>
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="search-results">
        { isLoading ?
          <p>Searching...</p> :
          <>
            { searchResults.map(game => (
                  <div key={game.id} className="card">
                    <div className="card-contents">
                      <div className="game-img">
                        <img src={game.image.medium_url} title={game.name + ' box'} />
                      </div>
                      <div className="game-detail">
                        <header className="game-header">
                          <h3>{game.name}</h3>
                          <button className="btn-rent-game">Add to cart</button>
                        </header>
                        <p>{game.deck}</p>
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </>
        }
      </div>
    </div>
  )
}