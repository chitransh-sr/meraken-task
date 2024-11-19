import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <br/>
      <div className="view-details-button">
      <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">
          View Details
        </Link>
        </div>
    </div>
  );
}

export default ProductItem;
