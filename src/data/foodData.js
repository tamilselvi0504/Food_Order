export const restaurants = [
  {
    id: 1,
    name: "Spice Route",
    cuisine: "South Indian • Biryani",
    rating: 4.7,
    deliveryTime: "25-30 min",
    location: "Chennai",
    emoji: "🍛",
    description: "Authentic South Indian flavours and delicious biryanis."
  },
  {
    id: 2,
    name: "Urban Bites",
    cuisine: "Burgers • Fast Food",
    rating: 4.5,
    deliveryTime: "20-25 min",
    location: "Chennai",
    emoji: "🍔",
    description: "Fresh burgers, fries and quick bites."
  },
  {
    id: 3,
    name: "Pizza Palace",
    cuisine: "Pizza • Italian",
    rating: 4.6,
    deliveryTime: "30-35 min",
    location: "Chennai",
    emoji: "🍕",
    description: "Cheesy pizzas made with fresh ingredients."
  }
];

export const foods = [
  {
    id: 101,
    restaurantId: 1,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 180,
    emoji: "🍗",
    description: "Aromatic basmati rice cooked with tender chicken and spices."
  },
  {
    id: 102,
    restaurantId: 1,
    name: "Mutton Biryani",
    category: "Biryani",
    price: 240,
    emoji: "🍖",
    description: "Rich and flavourful biryani with tender mutton pieces."
  },
  {
    id: 103,
    restaurantId: 1,
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 150,
    emoji: "🍚",
    description: "Flavourful fried rice with chicken and fresh vegetables."
  },
  {
    id: 104,
    restaurantId: 1,
    name: "Paneer Rice",
    category: "Rice",
    price: 140,
    emoji: "🥘",
    description: "Delicious rice prepared with soft paneer and vegetables."
  },
  {
    id: 105,
    restaurantId: 1,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 80,
    emoji: "🍮",
    description: "Soft sweet dumplings served with sugar syrup."
  },

  {
    id: 201,
    restaurantId: 2,
    name: "Classic Chicken Burger",
    category: "Burger",
    price: 160,
    emoji: "🍔",
    description: "Crispy chicken patty with fresh vegetables and sauce."
  },
  {
    id: 202,
    restaurantId: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 140,
    emoji: "🍔",
    description: "Juicy burger topped with melted cheese."
  },
  {
    id: 203,
    restaurantId: 2,
    name: "French Fries",
    category: "Snacks",
    price: 90,
    emoji: "🍟",
    description: "Crispy golden fries with a delicious seasoning."
  },
  {
    id: 204,
    restaurantId: 2,
    name: "Cold Coffee",
    category: "Drinks",
    price: 100,
    emoji: "🥤",
    description: "Chilled creamy coffee served with ice."
  },

  {
    id: 301,
    restaurantId: 3,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 220,
    emoji: "🍕",
    description: "Classic pizza topped with tomato, mozzarella and herbs."
  },
  {
    id: 302,
    restaurantId: 3,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 280,
    emoji: "🍕",
    description: "Loaded pizza with fresh vegetables and cheese."
  },
  {
    id: 303,
    restaurantId: 3,
    name: "Garlic Bread",
    category: "Snacks",
    price: 120,
    emoji: "🥖",
    description: "Soft garlic bread with butter and herbs."
  },
  {
    id: 304,
    restaurantId: 3,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 130,
    emoji: "🍫",
    description: "Warm chocolate cake with a gooey centre."
  }
];

export const categories = [
  "All",
  "Biryani",
  "Rice",
  "Burger",
  "Pizza",
  "Snacks",
  "Desserts",
  "Drinks"
];