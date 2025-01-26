import { configureStore } from "@reduxjs/toolkit";
import { products } from "../slices/products";
import { search } from "../slices/search";
import { productdetails } from "../slices/productDetails";

export const store = configureStore({
  reducer: {
    products,
    search,
    productdetails,
  },
});
