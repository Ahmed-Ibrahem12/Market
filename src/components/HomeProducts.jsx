import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../redux/slices/products";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const { HomeProducts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className=" flex flex-wrap gap-5 ">
      {HomeProducts?.products?.slice(0, 20).map((p, i) => (
        <Card
          key={i}
          className="w-72 bg-white text-black m-auto relative dark:bg-gray-700 dark:text-white"
        >
          <div className="h-14 w-24 absolute top-5 left-0 bg-green-500 text-white rounded z-10 text-center">
            <h1 className="text-[1.1em] font-bold mt-3">{p.category}</h1>
          </div>
          <CardHeader floated={false} className="h-80">
            <img src={p.images.length > 1 ? p.images[1] : p.images[0]} />
          </CardHeader>
          <CardBody className="text-center flex items-center flex-col">
            <Typography variant="h6" className="mb-2 flex gap-1">
              Brand:{" "}
              <span className="text-green-500">
                {" "}
                {p.brand?.length > 1 ? p.brand : "Unknown"}
              </span>
            </Typography>

            {/* <div className="bg-white h-1 w-1/2 absolute rounded"></div> */}
            <Typography variant="h6" className="mb-2">
              {p.title}
            </Typography>
            <Typography
              className="font-medium text-black flex gap-1 dark:text-white"
              textGradient
            >
              price: <span className="text-green-500 font-bold">{p.price}</span>
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-3 pt-2 flex-col">
            <Button
              variant="filled"
              className="w-full"
              color="green"
              size="sm"
              onClick={() => navigate(`/product/${p.id}`)}
            >
              Show Product
            </Button>
            <Button
              variant="filled"
              className="w-full"
              color="green"
              size="sm"
              onClick={() => dispatch(addToCart(p))}
            >
              Add To Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HomeProducts;
