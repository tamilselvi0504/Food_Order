import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {

  const { register } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      setError("Please fill all fields.");
      return;
    }

    register(
      form.name,
      form.email,
      form.password
    );

    navigate("/");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          🍴
        </div>

        <h1>Create Account</h1>

        <p>
          Join FoodFlow and start ordering.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Name</label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Email</label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create password"
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
            Create Account
          </button>

        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}