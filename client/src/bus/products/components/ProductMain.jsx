import React from 'react';
import {
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { ImageWithFallback } from '../../../global/components';

export const ProductMain = ({ product }) => {
    const {
        name,
        count,
        image,
    } = product || {};

    return (
        <Card>
            <ImageWithFallback
              image={image?.uri}
              alt={name}
              title={name}
              height="300"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    In stock: {count}
                </Typography>
            </CardContent>
        </Card>
    );
};
