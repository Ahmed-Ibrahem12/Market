import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/products";
import ProductCard from "../../components/ProductCard";

const Laptops = () => {
  const { HomeProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="  bg-gray-300 flex flex-col items-center dark:text-white dark:bg-gray-800">
      <div className="sm:w-1/2 w-3/4 text-start shadow-lg dark:bg-gray-700 dark:text-white relative mb-10 h-20 bg-gray-500 text-white mt-5 flex items-center rounded-lg">
        <span className="absolute bg-green-400 h-full w-2 top-0 left-0 rounded-t-lg rounded-b-lg "></span>

        <h1 className="text-[1.5em]  m-auto p-3 rounded text-white font-bold mt-10 mb-10">
          Laptops
        </h1>
        <span className="absolute bg-green-400 h-full w-2 top-0 right-0 rounded-t-lg rounded-b-lg "></span>
      </div>
      <div className="flex flex-wrap container m-auto ">
        {HomeProducts?.products?.map(
          (p, i) => p.category == "laptops" && <ProductCard key={i} p={p} />
        )}
      </div>
    </div>
  );
};

export default Laptops;
