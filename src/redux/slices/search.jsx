import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchProducts = createAsyncThunk(
  "search products",
  async (search, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "get",
        url: `https://dummyjson.com/products/search?q=${search}`,
      });
      // return data.data.products.filter((product) =>
      //   product.title.toLowerCase().includes(search)
      // );
      return data.data;
    } catch (er) {
      return rejectWithValue(er.message);
    }
  }
);

const data = {
  loading: true,
  error: null,
  SearchProducts: null,
  text: "",
};

const Search = createSlice({
  name: "search products",
  initialState: data,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSearchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.SearchProducts = action.payload;
    });
    builder.addCase(getSearchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const search = Search.reducer;
