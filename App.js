import React, { useState } from 'react';
import './Cart.css'; // Import CSS file for styling


function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const appleJuice = {
    name: 'Apple Juice',
    price: 5.99,
    image: 'https://cdn.dotpe.in/longtail/store-items/4807804/SzWKMap2.jpeg', // Placeholder image URL
  };

  const grapeJuice = {
    name: 'Grape Juice',
    price: 4.99,
    image: 'https://fairfieldmeats.co.za/cdn/shop/files/faircapecranberry2liter.png?v=1692181966', // Placeholder image URL
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="products-container">
        <h2>Products</h2>
        <div className="product">
          <img src={appleJuice.image} alt={appleJuice.name} />
          <p>{appleJuice.name}</p>
          <p>${appleJuice.price}</p>
          <button onClick={() => addToCart(appleJuice)}>Add to Cart</button>
        </div>
        <div className="product">
          <img src={grapeJuice.image} alt={grapeJuice.name} />
          <p>{grapeJuice.name}</p>
          <p>${grapeJuice.price}</p>
          <button onClick={() => addToCart(grapeJuice)}>Add to Cart</button>
        </div>
      </div>
      <div className="cart-details">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
        {cart.length > 0 && (
          <div>
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Cost: ${getTotalCost()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
