import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <p>This is the products page</p>
      <p>
        Go to <Link to="/"> Home</Link>
      </p>
    </div>
  );
}

export default Products;
