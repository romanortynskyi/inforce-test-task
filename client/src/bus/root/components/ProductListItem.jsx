import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Book } from '../../../common/enums/book';
import { ImageWithFallback } from '../../../global/components';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardMedia: {
    objectFit: 'contain',
  },
});

export const ProductListItem = ({ product }) => {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  const productURL = `${Book.PRODUCTS}/${product?.id}`;
  
  const onImageError = (e) => {
    setImage(`${process.env.PUBLIC_URL}/image-not-found.svg`);
  };

  return (
      <Grid item xs={12} sm={6} md={4}>
        <Tooltip title={product?.name} interactive arrow>
          <Card className={classes.root}>
          <Link to={productURL}>
            <CardActionArea>
              <ImageWithFallback
                image={product?.image?.uri || image}
                alt={product?.name}
                title={product?.name}
                onError={onImageError}
                height="140"
              />
              <CardContent>
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  {product?.name}
                </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                  In stock: {product?.count}
                </Typography>
                {/*
                <Typography variant="body2" color="textSecondary" component="p">
                  1 дит - {kidPrice}$
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  disabled
                /> */}
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>
        </Tooltip>
    </Grid>
  );
};
