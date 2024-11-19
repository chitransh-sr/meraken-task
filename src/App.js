import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productsData from "./data/products.json";
import "./App.css";
import { Routes , Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // Add to cart functionality
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Sort products by price
  const sortProducts = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setSortOrder(order);
    setProducts(sorted);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Product Catalog</h1>
        <div className="controls">
          <button
            className="sort-button"
            onClick={() => sortProducts("asc")}
            disabled={sortOrder === "asc"}
          >
            Sort by Price: Low to High
          </button>
          <button
            className="sort-button"
            onClick={() => sortProducts("desc")}
            disabled={sortOrder === "desc"}
          >
            Sort by Price: High to Low
          </button>
        </div>
        <Cart cart={cart} />
      </header>
      <Routes>
          <Route
            path="/"
            element={<ProductList products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
    </div>
  );
}

export default App;
