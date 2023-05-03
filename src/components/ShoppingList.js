import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")

  const filterList = items.filter((item) => selectedCategory === "All" || selectedCategory === item.category)
  

  const updateCategory = (option) => {
    setCategory(option)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => updateCategory(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
