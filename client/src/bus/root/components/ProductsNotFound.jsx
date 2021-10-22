import React from 'react';
import {
    Grid, 
    Typography,
} from '@material-ui/core';
import {
    Cancel,
} from '@material-ui/icons';

export const ProductsNotFound = () => {
    return (
        <div>
            <Grid 
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item>
                    <Cancel />
                </Grid>
                <Grid item>
                    <Typography>
                        There are no products
                    </Typography>
                </Grid>
            </Grid>
        </div> 
    );
};
