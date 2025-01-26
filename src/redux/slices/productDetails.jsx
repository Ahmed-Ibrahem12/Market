import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "product details",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/${product}`,
      });
      return data.data;
    } catch (er) {
      return rejectWithValue(er.message);
    }
  }
);

const data = {
  loading: true,
  error: null,
  ProductDetails: null,
};

const Products = createSlice({
  name: "product details",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.ProductDeatils = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const productdetails = Products.reducer;
