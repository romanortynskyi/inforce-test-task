import {
    productRepository,
    commentRepository,
} from '../repositories';

import ProductService from './product.service';
import CommentService from './comment.service';

const productService = new ProductService({
    productRepository,
    commentRepository,
});

const commentService = new CommentService({
    commentRepository,
    productRepository,
});

export {
    productService,
    commentService,
};