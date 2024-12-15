import { useState, useEffect } from 'react';

export default function CartView() {

  const cart = [];
  const [errorMessage, setErrorMessage] = useState('');

  function handleError(error) {
    console.log('Search error: ', error);
    setErrorMessage('Error performing search, please try again.');
  }

  return (
    <div className="view">
      <h2>Rental Cart</h2>
      <div className="cart">
        {
          (cart.length) === 0 ? 
            <p>No games selected.</p> :
            cart.map(game => (
                <div key={game.id} className="game">
                  <h3>{game.name}</h3>
                  <p>{game.image}</p>
                  <p>{game.deck}</p>
                </div>
            )
          )
        }
        </div>
    </div>
  )
}