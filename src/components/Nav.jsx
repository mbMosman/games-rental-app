import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link className="nav-link" to="/">Search Games</Link>&nbsp;|&nbsp;
      <Link className="nav-link" to="/cart">Cart</Link>
    </nav>
  )
}