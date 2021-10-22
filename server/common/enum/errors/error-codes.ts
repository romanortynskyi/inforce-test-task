import { ErrorCodes as ProductErrorCodes } from './products/product-error-codes';
import { ErrorCodes as CommentErrorCodes } from './comments/comment-error-codes';

export const ErrorCodes = {
    PRODUCTS: ProductErrorCodes,
    COMMENTS: CommentErrorCodes,
    VALIDATION_ERROR: 'VALIDATION_ERROR',
};
