import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <main className="empty-state page">

      <div className="empty-icon">
        🔍
      </div>

      <h1>Page Not Found</h1>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="primary-btn"
      >
        Go Home
      </Link>

    </main>
  );
}