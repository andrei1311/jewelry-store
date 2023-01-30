import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const ProductsList = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../utils/products.json");
      const data = await response.json();
      SetProducts(data.products);
      JSON.parse(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
};

export default ProductsList;
