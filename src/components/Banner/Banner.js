import React from "react";
import Necklace from "../../assets/2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={Necklace} alt="Necklace" className="h-[32rem] w-full" />
        <div className=" absolute inset-y-0 right-56 top-40 w-96">
          <p className="text-white">Necklace with moon pendant</p>
          <p className="text-white uppercase text-4xl pt-4">
            A collection for your soul
          </p>
          <button className="text-white bg-slate-800 p-4 mt-2">
            Explore the collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
