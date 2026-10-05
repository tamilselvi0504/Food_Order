import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    try {

      login(email, password);

      navigate("/");

    } catch (err) {

      setError(err.message);

    }
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          🍴
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to continue ordering your favourite food.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter your password"
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="checkout-btn"
          >
            Login
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}