import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { getSearchProducts } from "../redux/slices/search";
import Loader from "./../components/loader/Loader";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ text }) => {
  const { SearchProducts, loading } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(text);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(getSearchProducts(text));
  //   }, 1000);
  // }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" bg-gray-300 flex flex-col items-center dark:bg-gray-800">
      <div className="w-1/2 text-start shadow-lg relative dark:bg-gray-700 mb-10 h-20 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
        <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>

        <h1 className="text-[1.5em]  m-auto p-3 rounded text-white font-bold mt-10 mb-10">
          Search Products
        </h1>
        <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
      </div>
      <div className="flex flex-wrap container m-auto ">
        <div className="w-full text-start shadow-lg relative mb-10 h-20 dark:bg-gray-700 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
          <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>

          <h1 className="text-[1.5em] gap-2 ms-3 p-3 rounded text-white font-bold mt-10 mb-10 flex items-center">
            This Result Based On : <p className="text-yellow-600">{text}</p>
          </h1>
          <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
        </div>
        {SearchProducts?.products?.map((p, i) => (
          <Card
            key={i}
            className="w-72 bg-white text-black m-auto relative mb-5 dark:bg-gray-700 dark:text-white"
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

              {/* <div className="bg-white h-1 w-1/2 absolute rounded"></div> */}
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
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
