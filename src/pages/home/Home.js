import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductsList from "../../components/products/ProductsList";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <Category />
      </div>
    </div>
  );
};

export default Home;
