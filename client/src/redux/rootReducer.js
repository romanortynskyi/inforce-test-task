import { combineReducers } from '@reduxjs/toolkit';

import { product } from './product.slice';
import { products } from './products.slice';

export const rootReducer = combineReducers({
    // reducers
    products,
    product,
});