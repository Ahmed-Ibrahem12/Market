import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/products";

import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const WomensShoes = () => {
  const { HomeProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="  bg-gray-300 flex flex-col items-center dark:text-white dark:bg-gray-800">
      <div className="sm:w-1/2 w-3/4 text-start shadow-lg relative dark:bg-gray-700 dark:text-white mb-10 h-20 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
        <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>

        <h1 className="text-[1.5em]  m-auto p-3 rounded text-white font-bold mt-10 mb-10">
          Womens Shoes
        </h1>
        <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
      </div>
      <div className="flex flex-wrap container m-auto ">
        {HomeProducts?.products?.map(
          (p, i) =>
            p.category == "womens-shoes" && (
              <Card
                key={i}
                className="w-72 dark:bg-gray-700 dark:text-white bg-white text-black m-auto relative mb-5 "
              >
                <div className="h-14 w-24 absolute top-5 left-0 bg-green-500 text-white rounded z-10 text-center">
                  <h1 className="text-[.8em] font-bold mt-3">{p.category}</h1>
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

                  {/* <div className="bg-white h-1 sm:w-1/2 w-3/4 absolute rounded"></div> */}
                  <Typography variant="h7" className="mb-2">
                    {p.title}
                  </Typography>
                  <Typography
                    className="font-medium text-black flex gap-1 dark:text-white"
                    textGradient
                  >
                    price: <span className="text-green-500">{p.price}</span>
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Button
                    variant="filled"
                    color="green"
                    size="sm"
                    onClick={() => navigate(`/product/${p.id}`)}
                  >
                    Show Product
                  </Button>
                </CardFooter>
              </Card>
            )
        )}
      </div>
    </div>
  );
};

export default WomensShoes;
