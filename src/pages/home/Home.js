import React from "react";
import Banner from "../../components/Banner/Banner";
import Divider from "../../components/Divider/Divider";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <Divider />
        <Category />
      </div>
    </div>
  );
};

export default Home;
