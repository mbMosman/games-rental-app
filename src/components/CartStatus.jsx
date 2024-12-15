import { useCart} from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function() {

  const cart = useCart();
  
  return (
    <div className="cart-size">
        <Link className="icon-link" to="/cart">
          Cart: {cart.length}
        </Link>
      </div>
  );
}