import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "./../redux/slices/productDetails";
import { Button } from "@material-tailwind/react";
import { FaCartArrowDown } from "react-icons/fa";
import { addToCart } from "../redux/slices/products";
import Loader from "../components/loader/Loader";

const ShowProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { ProductDeatils, loading } = useSelector(
    (state) => state.productdetails
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProductDetails(productId));
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col sm:flex-row w-full items-center h- p-3 dark:text-white">
      <div className="flex flex-col sm:w-1/2 p-5 sm:p-0">
        <div
          className={
            ProductDeatils?.images.length > 1
              ? " w-full items-center mt-10"
              : "w-full items-center sm:h-screen "
          }
        >
          <img
            src={
              ProductDeatils?.images?.length > 1
                ? ProductDeatils?.images[1]
                : ProductDeatils?.images[0]
            }
            className="m-auto"
            width={500}
          />
          <div className="flex justify-evenly mt-10 mb-10">
            {ProductDeatils?.images.length > 1 ? (
              ProductDeatils?.images?.map((p, i) => (
                <img
                  key={i}
                  src={p}
                  width={80}
                  className="cursor-pointer hover:border-black"
                />
              ))
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2 text-center mt-5 p-5 justify-evenly">
        <h1 className="text-[1.2em] font-bold">{ProductDeatils?.title}</h1>
        <hr className="mt-5 mb-5" />
        <p>{ProductDeatils?.description}</p>
        <div className="flex mt-10 mb-10 w-full justify-around">
          <p className="font-bold">
            Rating:{" "}
            <span className="text-green-500 font-bold">
              {" "}
              {ProductDeatils?.rating}
            </span>{" "}
          </p>
          |
          <p className="font-bold">
            Brand:{" "}
            <span className="text-green-500 font-bold">
              {" "}
              {ProductDeatils?.brand}
            </span>
          </p>
          |
          <p className="font-bold">
            Category:{" "}
            <span className="text-green-500 font-bold">
              {" "}
              {ProductDeatils?.category}
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full p-4 rounded bg-gray-300 dark:bg-gray-700 font-bold">
          <div className="flex gap-4 text-gray-700 dark:text-white">
            <p className="text-[1.2em] line-through">{ProductDeatils?.price}</p>
            <p className="text-[1.2em]">inclusive in takes</p>
          </div>

          <div className="flex gap-4 text-[1.2em] items-center mt-5">
            <p className="font-bold text-green-800 dark:text-green-500">
              {ProductDeatils?.price}
            </p>
            <p className="p-3 bg-green-800 text-white rounded">
              {ProductDeatils?.discountPercentage}% Off
            </p>
          </div>
        </div>
        <div className="flex w-full justify-evenly items-center mt-10 ">
          <Button
            onClick={() => dispatch(addToCart(ProductDeatils))}
            className="bg-green-800 flex items-center gap-3"
          >
            Add To Cart <FaCartArrowDown />
          </Button>
          <Button className="bg-green-800">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
