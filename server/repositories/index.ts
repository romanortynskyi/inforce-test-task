import ProductRepository from "./product.repository";
import CommentRepository from "./comment.repository";

const productRepository = new ProductRepository();
const commentRepository = new CommentRepository();


export {
    productRepository,
    commentRepository,
};
