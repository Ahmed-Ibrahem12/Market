import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products", async (a, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const data = await axios({
      method: "get",
      url: "https://dummyjson.com/products?limit=194",
    });
    return data.data;
  } catch (er) {
    return rejectWithValue(er.message);
  }
});

const data = {
  loading: true,
  error: null,
  HomeProducts: null,
  CartProducts: [],
};

const Products = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    increment: (state, obj) => {
      let newArr = state.CartProducts.map((pro) => {
        if (obj.payload.id === pro.id) {
          pro.count++;
        }

        return pro;
      });
      state.CartProducts = newArr;
    },
    decrement: (state, obj) => {
      let newArr = state.CartProducts.map((pro) => {
        if (obj.payload.id === pro.id) {
          if (pro.count > 1) pro.count--;
        }
        return pro;
      });
      state.CartProducts = newArr;
    },
    addToCart: (state, product) => {
      let check = state.CartProducts?.some((prod) => {
        return prod.id == product.payload.id;
      });
      if (check) {
        Products.actions.increment(product);
      } else {
        state.CartProducts = [
          ...state.CartProducts,
          { ...product.payload, count: 1 },
        ];
      }
    },
    deleteProduct: (state, product) => {
      let copy = state.CartProducts;
      let test = copy.filter((prod) => {
        if (product.payload.id != prod.id) {
          return prod;
        }
      });
      state.CartProducts = test;
    },
    deleteAll: (state, product) => {
      state.CartProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.HomeProducts = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const products = Products.reducer;
export const { increment, decrement, addToCart, deleteProduct, deleteAll } =
  Products.actions;
