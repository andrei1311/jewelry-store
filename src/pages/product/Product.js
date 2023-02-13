import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      setProduct(data.items.id);
    };

    fetchData();
  }, []);

  return (
    <div>
      {product &&
        product.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Product;
