import { ProductService } from './product.service';
import { CommentService } from './comment.service';

const apiUrl = process.env.REACT_APP_API_URL;

const productService = new ProductService( { apiUrl } );
const commentService = new CommentService( { apiUrl } );

export {
    productService,
    commentService,
};
