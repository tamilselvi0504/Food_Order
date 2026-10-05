import { useEffect, useState } from "react";
import OrderCard from "../component/OrderCard";

export default function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);

  }, []);

  return (
    <main className="page">

      <div className="page-header">
        <span className="section-tag">
          History
        </span>

        <h1>My Orders</h1>

        <p>
          View your previous orders and track active deliveries.
        </p>
      </div>

      {orders.length === 0 ? (

        <div className="empty-state">

          <div className="empty-icon">
            📦
          </div>

          <h2>No orders yet</h2>

          <p>
            Your placed orders will appear here.
          </p>

        </div>

      ) : (

        <div className="orders-list">

          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}

        </div>

      )}

    </main>
  );
}