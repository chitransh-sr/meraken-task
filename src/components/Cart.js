import React from "react";

function Cart({ cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <span>🛒 Cart: {totalItems} item(s)</span>
    </div>
  );
}

export default Cart;
