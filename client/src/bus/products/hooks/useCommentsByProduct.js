import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../redux/product.slice';

export const useCommentsByProduct = (productId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.getComments(productId));
    }, [dispatch, productId]);

    const { comments } = useSelector(state => state.product);
    return comments;
}
