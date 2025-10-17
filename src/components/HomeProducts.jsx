import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/products";

import ProductCard from "./ProductCard";

const HomeProducts = () => {
  const { HomeProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className=" flex flex-wrap gap-5 ">
      {HomeProducts?.products?.slice(0, 20).map((p, i) => (
        <ProductCard key={i} p={p} />
      ))}
    </div>
  );
};

export default HomeProducts;
