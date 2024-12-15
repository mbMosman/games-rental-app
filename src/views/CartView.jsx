import { useCart, useCartDispatch } from '../contexts/CartContext';

export default function CartView() {

  const cart = useCart();
  const dispatch = useCartDispatch();

  function handleRemove(game) {
    dispatch({ type: 'REMOVE_SELECTION', payload: game });
  }

  return (
    <div className="view">
      <h2>Rental Cart</h2>
      <div className="cart">
        { cart.length === 0 ? 
            <p>No games selected.</p> :
            cart.map(game => (
              <div key={game.id} className="card">
                <div className="card-contents">
                  <div className="game-img">
                    <img src={game.image.medium_url} title={game.name + ' box'} />
                  </div>
                  <div className="game-detail">
                    <header className="game-header">
                      <h3>{game.name}</h3>
                      <button className="btn-game" onClick={(event) => handleRemove(game)}>Remove</button>
                    </header>
                    <p>{game.deck}</p>
                  </div>
                </div>
              </div>
            )
          )
        }
        </div>
    </div>
  )
}