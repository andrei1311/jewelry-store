import React, { useEffect, useState } from "react";

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      setProduct(data.items.id);
    };

    fetchData();
  }, []);

  // const products = product.find((p) => p.id === parseInt(match.params.id, 1));

  // if (!products) {
  //   return <h2>Product not found!</h2>;
  // }

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
