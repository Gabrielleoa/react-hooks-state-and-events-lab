import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
//import Item from '../components/Item';

function Item({ name, category }) {
  
  return (
    <li >
      const { container } =  render(<Item name="Milk" category="Dairy"/>)
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
