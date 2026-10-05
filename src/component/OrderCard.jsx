import { Link } from "react-router-dom";

export default function OrderCard({ order }) {

  return (
    <div className="order-card">

      <div>
        <h3>Order #{order.id}</h3>

        <p>{order.createdAt}</p>

        <p>
          {order.items.length} item(s)
        </p>
      </div>

      <div>
        <strong>₹{order.total}</strong>

        <br />

        <span className="order-status">
          {order.status}
        </span>

        <br />

        <Link
          to={`/track/${order.id}`}
          className="primary-btn small-btn"
        >
          Track Order
        </Link>
      </div>

    </div>
  );
}