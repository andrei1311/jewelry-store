import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      setProducts(Object.values(data));

      console.log(response);
      console.log(data);
    };
    fetchData();
  }, []);

  // const product = products.find((item) => {
  //   return item.id === parseInt(id);
  // });

  if (!products) {
    return (
      <div>
        <section className="h-screen flex justify-center items-center">
          <Loader />
        </section>
        <h1>Loading...</h1>
      </div>
    );
  }

  // const { image, name, price } = product;
  // console.log(product);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
