import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/slices/wishlist";
import { addToCart } from "../redux/slices/products";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { WishlistProducts } = useSelector((state) => state.wishlist);

  if (WishlistProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh] text-center">
        <Heart size={60} className="text-gray-400 mb-3" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 mb-4">
          Browse products and add your favorites to your wishlist ❤️
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-10">
      <div className="flex justify-center items-center mb-6">
        <div className="sm:w-1/2 w-3/4 text-start shadow-lg relative mb-10 h-20 dark:bg-gray-700 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
          <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>
          <h1 className="text-[1.5em] m-auto p-3 rounded text-white font-bold mt-10 mb-10">
            My Wishlist ❤️
          </h1>
          <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {WishlistProducts.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="w-72 bg-white text-black m-auto relative dark:bg-gray-700 dark:text-white rounded-lg shadow-lg cursor-pointer my-4"
          >
            <div className="h-14 w-24 absolute top-5 left-0 bg-green-500 text-white rounded z-10 text-center">
              <h1 className="text-[.8em] font-bold mt-3">{p.category}</h1>
            </div>

            <CardHeader floated={false} className="h-80">
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.images?.[1] || p.images?.[0] || p.image || p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-contain"
                />
              </Link>
            </CardHeader>

            <CardBody className="text-center flex items-center flex-col">
              <Typography variant="h6" className="mb-2">
                {p.title.length > 25 ? p.title.slice(0, 25) + "..." : p.title}
              </Typography>
              <Typography className="font-medium text-black flex gap-1 dark:text-white">
                price:{" "}
                <span className="text-green-500 font-bold">${p.price}</span>
              </Typography>
            </CardBody>

            <CardFooter className="flex flex-col gap-3 pt-2">
              <motion.button
                onClick={() => dispatch(addToCart(p))}
                whileTap={{ scale: 0.9 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Add To Cart
              </motion.button>

              <motion.button
                onClick={() => dispatch(removeFromWishlist(p))}
                whileTap={{ scale: 0.9 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove From Wishlist
              </motion.button>
            </CardFooter>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => dispatch(clearWishlist())}
        className="text-white hover:text-red-700 flex items-center gap-2 m-auto mt-[4em] font-semibold bg-red-500 hover:bg-red-200 px-4 py-2 rounded-lg transition"
      >
        <Trash2 size={18} /> Clear All
      </button>
    </div>
  );
};

export default Wishlist;
