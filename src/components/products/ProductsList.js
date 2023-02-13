import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import Product from "../../pages/product/Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      setProducts(data.beadedNecklaces.items);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-8 justify-around ">
      {products.map((product) => (
        <div key={product.id} className="pt-4">
          <Link to={product.id}>
            <div className="p-4 opacity-80 hover:opacity-100 w-64">
              <img className="w-60 h-60 rounded-lg" src={product.image} />
              <div className="p-4 grid justify-items-center">
                <span className="text-gray-500 text-sm">
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
