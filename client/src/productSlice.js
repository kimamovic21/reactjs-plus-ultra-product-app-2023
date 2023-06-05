import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
      setProducts(state, action){
          state.products = action.payload;
      },
      deleteProduct(state, action) {
        const id = action.payload;
        const productsCopy = [...state.products];
        // findIndex pa splice da se obrise iz arraya

        state.products = productsCopy;
      }
  },
})

// Action creators are generated for each case reducer function

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;