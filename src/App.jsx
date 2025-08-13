import { useState } from "react";
import plants from "./data";
import Plants from "./Plants";
import Cart from "./Cart";
import './index.css'; 

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === plant.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (plantId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <h1>Proper Plants</h1>
      <div className = "app-content"></div>
      <Plants plants={plants} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
