import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="navbar">

      <Link to="/" className="logo">
        Food<span>Flow</span>
      </Link>

      <nav>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/restaurants">
          Restaurants
        </NavLink>

        {user && (
          <NavLink to="/orders">
            Orders
          </NavLink>
        )}

        <NavLink to="/cart">
          Cart ({cartCount})
        </NavLink>

        {user ? (
          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login">
            Login
          </NavLink>
        )}

      </nav>

    </header>
  );
}