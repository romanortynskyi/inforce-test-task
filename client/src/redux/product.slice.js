import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService, commentService } from '../services';

const ActionTypes = {
    GET_BY_ID: 'product/get-by_id',
    GET_COMMENTS: 'product/get-comments',
    ADD_COMMENT: 'product/add-comment',
    DELETE_COMMENT: 'product/delete-comment',
}

const getById = createAsyncThunk(
    ActionTypes.GET_BY_ID,
    async (id, thunkAPI) => {
        const response = await productService.getById(id);
        return response.data;
    }
);

const getComments = createAsyncThunk(
    ActionTypes.GET_COMMENTS,
    async (id, thunkAPI) => {
        const response = await commentService.getByProduct(id);
        return response.data;
    } 
);

const addComment = createAsyncThunk(
    ActionTypes.ADD_COMMENT,
    async (payload, thunkAPI) => {
        const response = await commentService.create(payload);
        return response.data;
    } 
);

const deleteComment = createAsyncThunk(
    ActionTypes.DELETE_COMMENT,
    async (id, thunkAPI) => {
        const response = await commentService.delete(id);
        return response.data;
    } 
);


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: {
            isFetching: false,
            data: [],
        },
        comments: {
            isFetching: false,
            data: null,
        },
    },
    reducers: {
        
    },
    extraReducers: {
        [getById.pending]: (state, action) => {
            state.product.isFetching = true;
        },
        [getById.fulfilled]: (state, action) => {
            state.product.data = action.payload;
            state.product.isFetching = false;
        },

        [getComments.pending]: (state, action) => {
            state.comments.isFetching = true;
        },
        [getComments.fulfilled]: (state, action) => {
            state.comments.data = action.payload;
            state.comments.isFetching = false;
        },

        [addComment.pending]: (state, action) => {
            state.comments.isFetching = true;
        },
        [addComment.fulfilled]: (state, action) => {
            state.comments.data = [
                ...state.comments.data,
                action.payload,
            ];
            state.comments.isFetching = false;
        },

        [deleteComment.pending]: (state, action) => {
            state.comments.isFetching = true;
        },
        [deleteComment.fulfilled]: (state, action) => {
            console.log(action)
            state.comments.data = state.comments.data.filter(comment => comment.id !== action.payload);
            state.comments.isFetching = false;
        },
    },
});

export const product = productSlice.reducer;

export const productActions = {
    getById,
    getComments,
    addComment,
    deleteComment,
};
