import { createSlice } from "@reduxjs/toolkit";

const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = {
  WishlistProducts: storedWishlist,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newProduct = action.payload;
      const exists = state.WishlistProducts.find((p) => p.id === newProduct.id);

      if (!exists) {
        state.WishlistProducts.push(newProduct);
        localStorage.setItem(
          "wishlist",
          JSON.stringify(state.WishlistProducts)
        );
      }
    },
    removeFromWishlist: (state, action) => {
      state.WishlistProducts = state.WishlistProducts.filter(
        (p) => p.id !== action.payload.id
      );
      localStorage.setItem("wishlist", JSON.stringify(state.WishlistProducts));
    },
    clearWishlist: (state) => {
      state.WishlistProducts = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export const wishlist = wishlistSlice.reducer;
