import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ProductListItem } from './ProductListItem';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '20px',
    },
}));

export const ProductList = ({ products }) => {
    const classes = useStyles();

    return (
        <Grid 
            container
            spacing={4}
            className={classes.root}
        >
            {products?.map((product) => <ProductListItem key={product.id} product={product} />)}
        </Grid>   
    );
};
