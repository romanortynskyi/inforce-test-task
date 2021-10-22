import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Book } from '../common/enums/book';
import {
    RootPage,
    ProductPage,
} from '../pages';

export const Routes = () => {
    return <>
        <Switch>
            <Route exact path={Book.ROOT}>
                <RootPage />
            </Route>
            <Route path={Book.PRODUCT}>
                <ProductPage />
            </Route>
        </Switch>
    </>
};
