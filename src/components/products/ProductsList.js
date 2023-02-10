import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import Product from "../../pages/product/Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      setProducts(data.barNecklaces.items);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-8 justify-around ">
      {products.map((product) => (
        <div key={product.id} className="pt-4">
          <div className="border-2 border-red-300 rounded-lg p-4  shadow-xl shadow-red-100 opacity-70 hover:opacity-100">
            <img className="w-60 h-60 rounded-full" src={product.image} />
            <div className="p-4 grid justify-items-center">
              <span className="text-gray-500 text-sm">
                Price: {product.price} €
              </span>
              <h2 className="font-bold text-gray-500">{product.name}</h2>
              <div className="pt-4">
                <button className="bg-red-300 p-2 rounded-full text-white w-40">
                  <Link to={`/product/${products.id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
