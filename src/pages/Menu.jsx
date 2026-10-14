
// Top import-la useEffect add pannu:
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "./Menu.css";


const foodCategories = [
  {
    name: "Veg",
    items: [
      { id: 1, name: "Mushroom Biryani", price: 180, image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400" },
      { id: 2, name: "Mushroom Fried Rice", price: 160, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" },
      { id: 3, name: "Gobi Noodles", price: 140, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
      { id: 4, name: "Paneer Butter Masala", price: 200, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400" },
      { id: 5, name: "Veg Fried Rice", price: 130, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
      { id: 6, name: "Veg Burger", price: 120, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400" },
      { id: 7, name: "Paneer Pizza", price: 250, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400" },
      { id: 8, name: "Veg Sandwich", price: 100, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400" }
    ]
  },
  {
    name: "Non-Veg",
    items: [
      { id: 9, name: "Chicken Biryani", price: 220, image: "https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg" },
      { id: 10, name: "Chicken Fried Rice", price: 180, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
      { id: 11, name: "Chicken Noodles", price: 170, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
      { id: 12, name: "Grilled Chicken", price: 280, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400" },
      { id: 13, name: "Chicken Burger", price: 180, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
      { id: 14, name: "Chicken Pizza", price: 300, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
      { id: 15, name: "Fish Fry", price: 220, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
      { id: 16, name: "Egg Fried Rice", price: 140, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" }
    ]
  },
  {
    name: "Soft Drinks",
    items: [
      { id: 17, name: "Coca-Cola", price: 50, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400" },
      { id: 18, name: "Pepsi", price: 50, image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400" },
      { id: 19, name: "Sprite", price: 50, image: "https://www.shutterstock.com/image-photo/poznan-pol-apr-02-2025-260nw-2609175503.jpg" },
      { id: 20, name: "Lime Soda", price: 60, image: "https://i.pinimg.com/736x/68/97/12/6897122e899a034c8e5cf08f9e0299dc.jpg" },
      { id: 21, name: "Orange Juice", price: 80, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400" },
      { id: 22, name: "Mango Juice", price: 80, image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400" },
      { id: 23, name: "Iced Lemon Drink", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZzYez0aTiwuSro3M9ojfbzLnAX3og5jKF8X-wnFokw&s" },
      { id: 24, name: "Cold Coffee", price: 100, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" }
    ]
  },
  {
    name: "Desserts",
    items: [
      { id: 25, name: "Vanilla Ice Cream", price: 80, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
      { id: 26, name: "Chocolate Brownie", price: 100, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
      { id: 27, name: "Chocolate Cupcake", price: 90, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400" },
      { id: 28, name: "Chocolate Cake", price: 120, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
      { id: 29, name: "Strawberry Dessert", price: 90, image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
      { id: 30, name: "Donut", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkaBOjbzCqoGgiwqwZ7bPAQIYuj96ItVvU6F7mQhq6A&s" },
      { id: 31, name: "Cheesecake", price: 140, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
      { id: 32, name: "Pancakes", price: 130, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400" }
    ]
  }
];


// foodCategories array-ku keezha irukkura old Menu function-a replace pannu:
export default function Menu({ onAddToCart }) {
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(
    foodCategories.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        category: category.name,
      }))
    )
  );
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  // Backend API create pannina, inga actual endpoint URL podu.
  const API_URL = "YOUR_API_ENDPOINT_HERE";

  useEffect(() => {
    if (API_URL === "YOUR_API_ENDPOINT_HERE") return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setApiError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to load products.");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setApiError("Products load aagala. API connection check pannu.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    "Veg",
    "Non-Veg",
    "Soft Drinks",
    "Desserts",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const handleAddToCart = (product) => {
    if (typeof onAddToCart !== "function") {
      console.error("onAddToCart was not passed from App.jsx");
      return;
    }

    onAddToCart(product);
    setMessage(`${product.name} added to your cart!`);

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <main className="menu-page">
      

      {message && (
        <div className="cart-popup" role="status">
          ✓ {message}
        </div>
      )}

      <div className="menu-layout">
        {sidebarOpen && (
          <>
            <button
              className="sidebar-backdrop"
              aria-label="Close filters"
              onClick={() => setSidebarOpen(false)}
            />

            <aside className="filter-sidebar">
              <div className="filter-title">
                <h2>Filters</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  ✕
                </button>
              </div>

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "filter-option active"
                      : "filter-option"
                  }
                  onClick={() => {
                    setSelectedCategory(category);
                    setSidebarOpen(false);
                  }}
                >
                  {category === "All" ? "🍽️" :
                   category === "Veg" ? "🥦" :
                   category === "Non-Veg" ? "🍗" :
                   category === "Soft Drinks" ? "🥤" : "🍰"}
                  {" "}{category}
                </button>
              ))}
            </aside>
          </>
        )}

        <section className="menu-content">
          <h2>{selectedCategory === "All" ? "All Items" : selectedCategory}</h2>

          {loading && <p>Loading products...</p>}
          {apiError && <p role="alert">{apiError}</p>}

          {!loading && filteredProducts.length === 0 && (
            <p>No products found in this category.</p>
          )}

          {selectedCategory === "All" ? (
            foodCategories.map((category) => {
              const categoryProducts = filteredProducts.filter(
                (product) => product.category === category.name
              );

              if (categoryProducts.length === 0) return null;

              return (
                <section className="menu-category" key={category.name}>
                  <h2>{category.name}</h2>

                  <div className="menu-horizontal-scroll">
                    {categoryProducts.map((product) => (
                      <div className="menu-product" key={product.id}>
                        <ProductCard
                          product={product}
                          onAddToCart={handleAddToCart}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })
          ) : (
            <div className="menu-horizontal-scroll">
              {filteredProducts.map((product) => (
                <div className="menu-product" key={product.id}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
