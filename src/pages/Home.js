import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my site!</p>
      {/*  <p>
        Go to
        <a href="/products"> Products</a> 
       
      </p> */}

      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}

export default Home;
