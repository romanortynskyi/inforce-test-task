import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from '../../../redux/products.slice';

export const useProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsActions.getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.products);
    return products;
}
