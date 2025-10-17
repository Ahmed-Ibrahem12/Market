import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/products";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-72 bg-white text-black m-auto relative dark:bg-gray-700 dark:text-white rounded-lg shadow-lg cursor-pointer my-4"
    >
      <div className="h-14 w-24 absolute top-5 left-0 bg-green-500 text-white rounded z-10 text-center">
        <h1 className="text-[.8em] font-bold mt-3 items-center ">
          {p.category}
        </h1>
      </div>
      <CardHeader
        floated={false}
        className="h-80"
        onClick={() => navigate(`/product/${p.id}`)}
      >
        <img src={p.images.length > 1 ? p.images[1] : p.images[0]} />
      </CardHeader>
      <CardBody
        className="text-center flex items-center flex-col"
        onClick={() => navigate(`/product/${p.id}`)}
      >
        <Typography variant="h6" className="mb-2">
          {p.title.length > 25 ? p.title.slice(0, 25) + "..." : p.title}
        </Typography>

        <Typography
          className="font-medium text-black flex gap-1 dark:text-white"
          textGradient
        >
          price: <span className="text-green-500 font-bold">{p.price}</span>
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
      </CardFooter>
    </motion.div>
  );
};

export default ProductCard;
