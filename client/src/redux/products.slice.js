import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { 
    productService,
} from '../services';

const ActionTypes = {
    GET_PRODUCTS: 'products/get-products',
}

const getProducts = createAsyncThunk(
    ActionTypes.GET_PRODUCTS,
    async (_, thunkAPI) => {
        const response = await productService.getAll();
        return response.data;
    }
);


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: {
            data: null,
            isFetching: false,
        },   
    },
    reducers: {

    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.products.isFetching = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products.data = action.payload;
            state.products.isFetching = false;
        },
    },
});

export const products = productsSlice.reducer;

export const productsActions = {
    getProducts,
};
