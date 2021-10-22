import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../redux/product.slice';

export const useProduct = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getById(id));
    }, [dispatch, id]);
    const { product } = useSelector(state => state.product);
    return product;
}
