import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/products";
import { addToWishlist, removeFromWishlist } from "../redux/slices/wishlist";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { WishlistProducts } = useSelector((state) => state.wishlist);
  const isInWishlist = WishlistProducts.some((item) => item.id === p.id);

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(p));
    } else {
      dispatch(addToWishlist(p));
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-72 bg-white text-black m-auto relative dark:bg-gray-700 dark:text-white rounded-lg shadow-lg cursor-pointer my-4"
    >
      {/* <div className="h-14 w-24 absolute top-3 left-2 rounded z-10 text-center">
        <span
          className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
          style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)" }}
        >
          {p.category}
        </span>
      </div> */}

      <motion.button
        onClick={handleWishlist}
        whileTap={{ scale: 0.9 }}
        className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
          isInWishlist
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white"
        }`}
      >
        <FaHeart
          className={`text-lg ${isInWishlist ? "text-white" : "text-gray-700"}`}
        />
      </motion.button>

      <CardHeader
        floated={false}
        className="h-80"
        onClick={() => navigate(`/product/${p.id}`)}
      >
        <div className="absolute top-0 left-0 bg-black/50 text-white text-xs px-3 py-1 rounded-br-lg">
          {p.category}
        </div>
        <img
          src={p.images.length > 1 ? p.images[1] : p.images[0]}
          alt={p.title}
          className="w-full h-full object-contain"
        />
      </CardHeader>

      <CardBody
        className="text-center flex items-center flex-col"
        onClick={() => navigate(`/product/${p.id}`)}
      >
        <Typography variant="h6" className="mb-2">
          {p.title.length > 25 ? p.title.slice(0, 25) + "..." : p.title}
        </Typography>
        <Typography className="font-medium text-black flex gap-1 dark:text-white">
          price: <span className="text-green-500 font-bold">{p.price}$</span>
        </Typography>
      </CardBody>

      <CardFooter className="flex justify-center gap-3 pt-2 flex-col">
        <motion.button
          variant="filled"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          size="sm"
          onClick={() => dispatch(addToCart(p))}
          whileTap={{ scale: 0.9 }}
        >
          Add To Cart
        </motion.button>
        <motion.button
          variant="filled"
          className={`w-full font-bold py-2 px-4 rounded transition ${
            isInWishlist
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-gray-200 hover:bg-green-600 hover:text-white text-gray-800"
          }`}
          size="sm"
          onClick={handleWishlist}
          whileTap={{ scale: 0.9 }}
        >
          {isInWishlist ? "Remove From Wishlist" : "Add To Wishlist"}
        </motion.button>
      </CardFooter>
    </motion.div>
  );
};

export default ProductCard;
