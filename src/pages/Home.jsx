import React, { useEffect } from "react";
import SliderHome from "../components/SliderHome";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/products";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 dark:bg-gray-800">
      <div className="w-full container z-0">
        <SliderHome />
      </div>
      <div className="bg-gray-300 mt-20 w-full flex flex-col items-center dark:bg-gray-800">
        <div className="container flex flex-col items-center p-5 sm:p-0">
          <div className="w-full text-start shadow-lg dark:bg-gray-700 relative mb-10 h-20 bg-gray-400 text-white mt-5 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Products
            </h1>
          </div>
          <HomeProducts />
          <div className="w-full text-start shadow-lg relative  mb-5 h-20 dark:bg-gray-700 bg-gray-400 text-white mt-16 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Beauty
            </h1>
          </div>{" "}
          <div className="w-full text-start shadow-lg relative mb-5 h-20 dark:bg-gray-700 bg-gray-400 text-white mt-10 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Fragrances
            </h1>
          </div>{" "}
          <div className="w-full text-start shadow-lg relative mb-5 h-20 dark:bg-gray-700 bg-gray-400 text-white mt-10 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Furniture
            </h1>
          </div>{" "}
          <div className="w-full text-start shadow-lg relative mb-5 h-20 dark:bg-gray-700 bg-gray-400 text-white mt-10 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Groceries
            </h1>
          </div>{" "}
          <div className="w-full text-start shadow-lg relative mb-5 h-20 dark:bg-gray-700 bg-gray-400 text-white mt-10 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Home Decoration
            </h1>
          </div>
          <div className="w-full text-start shadow-lg relative mb-20 h-20 dark:bg-gray-700 bg-gray-400 text-white mt-10 flex items-center rounded-lg">
            <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
            <h1 className="text-[1.5em] font-bold ms-5 w-full">
              See Our Home Accessories
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
