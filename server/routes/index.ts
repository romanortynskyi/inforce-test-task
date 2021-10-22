import { ApiPath } from '../common/enum/api/api-path';

import {
    productService,
    commentService,
} from '../services';

import { initProduct } from './product.route';
import { initComment } from './comment.route';

export const initApi = Router => {
    const router = Router();

    router.use(
        ApiPath.PRODUCTS,
        initProduct(Router, {
            productService,
        })
    );

    router.use(
        ApiPath.COMMENTS,
        initComment(Router, {
            commentService,
        })
    );

    return router;
};
