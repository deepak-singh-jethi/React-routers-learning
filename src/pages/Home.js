import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my site!</p>
      {/* <p>
        Go to <a href="/products">Products</a> Page
      </p> */}
      <p>
        Go to <Link to="/products">Products</Link> Page
      </p>
    </div>
  );
}

export default Home;
