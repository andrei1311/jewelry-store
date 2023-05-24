import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
      const data = await response.json();
      setCategories(Object.values(data));
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-around ">
      {categories.map((category) => (
        <div
          key={category.id}
          className="justify-items-center mt-6 shadow-lg shadow-slate-300 rounded-md"
        >
          <h2 className="text-center">{category.name}</h2>
          <img
            src={category.image}
            alt={category.name}
            className="w-60 h-60 p-4"
          />
          <Link to={`products/${category.id}`} className="">
            <button
              className="text-center mb-4 ml-8  text-white py-3 px-2"
              style={{ backgroundColor: "#83786f" }}
            >
              Discover the collection
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
