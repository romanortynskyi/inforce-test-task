import { commentValidation } from '../validation';
import { ErrorCodes } from '../common/enum/errors/error-codes';
import { CommentsApiPath } from '../common/enum/api';
import { validate } from '../middlewares/validation.middleware';

export const initComment = (Router, services) => {
    const router = Router();
    const { commentService } = services;

    router.post(
        CommentsApiPath.ROOT,
        validate(commentValidation.save), 
        async (req, res, next) => {
            const { data: createdComment, error } = await commentService.create(req.body);

            let body = {};

            switch(error?.code) {
                case ErrorCodes.PRODUCTS.PRODUCT_NOT_FOUND_BY_ID:
                    body = {
                        errors: [error],
                    };
                    req.result = {
                        body,
                        status: 404,
                    };
                    break;
                default:
                    body = createdComment;
                    req.result = {
                        body,
                        status: 201,
                    };
                    break;   
            }
                
            next();   
        }
    );

    router.get(
        CommentsApiPath.ROOT, 
        async (req, res, next) => {
            const { data: comments } = await commentService.getAll();
            req.result = {
                status: 200,
                body: comments,
            }
            
            next();
        }
    );

    router.get(
        CommentsApiPath.$ID, 
        async (req, res, next) => {
            const { id } = req.params;  
            const { data: comment, error } = await commentService.getById(id);

            let body = {};

            switch(error?.code) {
                case ErrorCodes.COMMENTS.COMMENT_NOT_FOUND_BY_ID:
                    body = {
                        errors: [error],
                    };
                    req.result = {
                        body,
                        status: 404,
                    };
                    break;
                default:
                    req.result = {
                        status: 200,
                        body: comment,
                    };
                    break;
            }
            
            next();
        }
    );

    router.delete(
        CommentsApiPath.$ID, 
        async (req, res, next) => {
            const { id } = req.params;
            const { error } = await commentService.delete(id);

            let body = {};

            switch(error?.code) {
                case ErrorCodes.COMMENTS.COMMENT_NOT_FOUND_BY_ID:
                    body = {
                        errors: [error],
                    };
                    req.result = {
                        body,
                        status: 404,
                    };
                    break;
                default:
                    req.result = {
                        status: 204,
                    };
                    break;   
            }
            
            next();
        }
    );

    return router;
};
