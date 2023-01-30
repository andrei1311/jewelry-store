import React, { useEffect, useState } from "react";
import axios from "axios";
import Earings from "../../assets/img/earings/5.jpg";
import Necklace from "../../assets/img/necklaces/15.jpg";
import Bracelate from "../../assets/img/bracelets/3.jpg";

export const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("../../utils/products.json")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      {Object.key(data).map((category) => {
        <div>
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div>
              <div className="carousel-item active relative float-left w-full h-1/2">
                <h2>{category}</h2>
                <div
                  className="columns-2 m-4 bg-red-300 rounded-full"
                  key={item.id}
                >
                  <img
                    src=""
                    className="block w-3/4 h-96 rounded-l-full"
                    alt="Bracelate"
                  />
                  <p className="mr-48 text-white pt-12 pb-4">{item.name}</p>
                  <button className="text-white bg-red-500 rounded-full p-2 mr-48">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="carousel-item relative float-left w-full h-1/2">
            <div className="columns-2 m-4 bg-red-300 rounded-full">
              <img
                src={Earings}
                className="block w-3/4 h-96 rounded-l-full"
                alt="Earings"
              />
              <p className="mr-48 text-white pt-12 pb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="text-white bg-red-500 rounded-full p-2 mr-48">
                SHOP NOW
              </button>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div> */}
            {/* <div className="carousel-item relative float-left w-full h-1/2">
            <div className="columns-2 m-4 bg-red-300 rounded-full">
              <img
                src={Necklace}
                className="block w-full h-96 rounded-l-full"
                alt="Necklace"
              />
              <p className="mr-48 text-white pt-12 pb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="text-white bg-red-500 rounded-full p-2 mr-48">
                SHOP NOW
              </button>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
				<h5 className="text-xl">Third slide label</h5>
				<p>Some representative placeholder content for the third slide.</p>
			  </div>
          </div> */}
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>;
      })}
    </div>
  );
};
