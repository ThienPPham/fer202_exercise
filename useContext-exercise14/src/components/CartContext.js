import React, { useState, useContext, createContext } from 'react';

const CartContext = createContext();

const dishesData = [
  {
    "id": 0,
    "name": "Uthappizza",
    "image": "images/uthappizza.png",
    "category": "mains",
    "label": "Hot",
    "price": "4.99",
    "featured": true,
    "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  // Add other dishes data here
];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ dishes: dishesData, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };