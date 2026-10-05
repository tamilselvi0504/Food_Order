import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const statusSteps = [
  "Order Placed",
  "Restaurant Accepted",
  "Preparing Food",
  "Out for Delivery",
  "Delivered"
];

export default function OrderTracking() {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const foundOrder = orders.find(
      (item) => item.id === id
    );

    setOrder(foundOrder);

  }, [id]);


  useEffect(() => {

    if (!order || order.status === "Delivered") {
      return;
    }

    const timer = setInterval(() => {

      setOrder((currentOrder) => {

        if (!currentOrder) {
          return currentOrder;
        }

        const currentIndex =
          statusSteps.indexOf(currentOrder.status);

        const nextIndex = Math.min(
          currentIndex + 1,
          statusSteps.length - 1
        );

        const updatedOrder = {
          ...currentOrder,
          status: statusSteps[nextIndex]
        };

        const orders =
          JSON.parse(localStorage.getItem("orders")) || [];

        const updatedOrders = orders.map((item) =>
          item.id === updatedOrder.id
            ? updatedOrder
            : item
        );

        localStorage.setItem(
          "orders",
          JSON.stringify(updatedOrders)
        );

        return updatedOrder;

      });

    }, 5000);

    return () => clearInterval(timer);

  }, [order]);


  if (!order) {

    return (
      <main className="empty-state page">
        <h1>Order not found</h1>

        <Link
          to="/orders"
          className="primary-btn"
        >
          Go to Orders
        </Link>
      </main>
    );
  }


  const currentIndex =
    statusSteps.indexOf(order.status);

  return (
    <main className="page">

      <div className="page-header">

        <span className="section-tag">
          Live Demo Tracking
        </span>

        <h1>Track Your Order</h1>

        <p>
          Order #{order.id}
        </p>

      </div>


      <div className="tracking-card">

        <div className="tracking-status">

          <div className="tracking-icon">
            {order.status === "Delivered"
              ? "✅"
              : "🚴"}
          </div>

          <h2>{order.status}</h2>

          <p>
            {order.status === "Delivered"
              ? "Your food has been delivered!"
              : "Your order is being processed."}
          </p>

        </div>


        <div className="timeline">

          {statusSteps.map((status, index) => (

            <div
              key={status}
              className={
                index <= currentIndex
                  ? "timeline-item completed"
                  : "timeline-item"
              }
            >

              <div className="timeline-dot">
                {index <= currentIndex ? "✓" : ""}
              </div>

              <div>
                <strong>{status}</strong>

                <p>
                  {index <= currentIndex
                    ? "Completed"
                    : "Pending"}
                </p>
              </div>

            </div>

          ))}

        </div>


        <div className="tracking-order-summary">

          <h2>Order Summary</h2>

          {order.items.map((item) => (

            <div
              className="summary-item"
              key={item.id}
            >
              <span>
                {item.emoji} {item.name} × {item.quantity}
              </span>

              <strong>
                ₹{item.price * item.quantity}
              </strong>
            </div>

          ))}

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{order.total}</strong>
          </div>

        </div>

      </div>

    </main>
  );
}