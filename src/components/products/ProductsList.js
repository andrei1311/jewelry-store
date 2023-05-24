import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const ProductsList = () => {
  const categoryId = useParams().categoryId;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      const category = Object.values(data).find(
        (category) => category.id === Number(categoryId)
      );
      setProducts(category.items);
    };

    fetchData();
  }, [categoryId]);

  if (!products) {
    return <Loader />;
  }

  return (
    <div className="flex flex-row flex-wrap justify-around gap-8 ">
      {products.map((product) => (
        <div key={product.id} className="pt-4">
          <Link to={`products/${product.id}`}>
            <div className="w-64 p-4 opacity-80 hover:opacity-100">
              <img
                className="rounded-lg w-60 h-60"
                src={product.image}
                alt={product.name}
              />
              <div className="grid p-4 justify-items-center">
                <span className="text-sm text-gray-500">
                  Price: {product.price} €
                </span>
                <h2 className="font-bold text-gray-500">{product.name}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
