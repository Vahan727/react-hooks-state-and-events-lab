import React from "react";
import {useState} from "react"

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

  const addToCart = () => {
    setCart((prev) => !prev)
  }

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
