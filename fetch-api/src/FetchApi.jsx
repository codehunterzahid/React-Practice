import React, { useState, useEffect } from "react";
import "./FetchApi.css";

export const FetchApi = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card-container">
      {products ? (
        products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.images} alt={item.title} />

            <h3>Price : {item.price}</h3>
            <h5>Category : {item.category}</h5>

            <h2>Title : {item.title} </h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>Data Not Found</p>
      )}
    </div>
  );
};
