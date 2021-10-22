import React from 'react';
import { useDispatch } from 'react-redux';
import {
    CircularProgress,
    Backdrop,
    Grid,
} from '@material-ui/core';

import { 
    Progress,
} from '../../global/components';
import { 
    ProductList,
    ProductsNotFound,
} from './components';
import { useProducts } from './hooks';

const Root = () => {
    const { data: products, isFetching: productsFetching } = useProducts();
    const progressJSX = (<Backdrop open={true} >
        <CircularProgress color="inherit" />
    </Backdrop>);

    const productsListJSX = products?.length === 0 ? 
        <ProductsNotFound /> :
        <ProductList products={products} />;
    
    return productsFetching ? <Progress /> : (
        <div>
            <Grid 
                container 
                alignItems="center" 
                justify="center"
            >
                {productsFetching ? progressJSX : productsListJSX}
            </Grid>
        </div>
    );
};

export default Root;
