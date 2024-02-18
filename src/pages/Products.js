import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <p>This is the products page</p>
      <ul>
        {PRODUCTS.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
