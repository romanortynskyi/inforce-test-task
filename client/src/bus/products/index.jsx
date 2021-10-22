import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    Progress,
} from '../../global/components';
import {
    ProductMain,
    ProductCommentForm,
    ProductCommentList,
} from './components';
import { productActions } from '../../redux/product.slice';
import { 
    useProduct,
    useCommentsByProduct,
} from './hooks';

const Product = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(useParams())
    const { 
        data: product,
        isFetching: isFetchingProduct, 
        error: productError,
    } = useProduct(id);
    const { 
        data: comments,
        isFetching: isFetchingComments, 
    } = useCommentsByProduct(id);

    const addComment = async (values) => {
        dispatch(productActions.addComment({
            ...values,
            productId: id,
        }));
    };

    const deleteComment = async (id) => {
        dispatch(productActions.deleteComment(id));
    };

    const isFetching = isFetchingProduct || isFetchingComments;

    const productJSX = productError ? <h1>Product not found</h1> : <>
        <ProductMain product={product} />
        <ProductCommentForm onSubmit={addComment} />
        <ProductCommentList comments={comments} onDeleteComment={deleteComment} />
    </>;
    return (
        <>
            {isFetching ? <Progress /> : productJSX}
        </>
    );
};

export default Product;
