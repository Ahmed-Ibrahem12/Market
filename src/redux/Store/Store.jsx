import { configureStore } from "@reduxjs/toolkit";
import { products } from "../slices/products";
import { search } from "../slices/search";
import { productdetails } from "../slices/productDetails";
import { wishlist } from "../slices/wishlist";

export const store = configureStore({
  reducer: {
    products,
    search,
    productdetails,
    wishlist,
  },
});
