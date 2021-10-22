import { productValidation } from '../validation';
import { ErrorCodes } from '../common/enum/errors/error-codes';
import { ProductsApiPath } from '../common/enum/api';
import { validate } from '../middlewares/validation.middleware';
import { upload } from '../utils/multer';

export const initProduct = (Router, services) => {
    const router = Router();
    const { productService } = services;

    router.post(
        ProductsApiPath.ROOT,
        upload.single('image'),
        validate(productValidation.save), 
        async (req, res, next) => {
            const { data: createdProduct, error } = await productService.create({
                ...req.body,
                image: req.file,
            });
            req.result = {
                status: 201,
                body: createdProduct,
            };
                
            next();   
        }
    );

    router.get(
        ProductsApiPath.ROOT, 
        async (req, res, next) => {
            const { data: products } = await productService.getAll();
            req.result = {
                status: 200,
                body: products,
            }
            
            next();
        }
    );

    router.get(
        ProductsApiPath.$ID, 
        async (req, res, next) => {
            const { id } = req.params;  
            const { data: product, error } = await productService.getById(id);

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
                    req.result = {
                        status: 200,
                        body: product,
                    };
                    break;
            }
            
            next();
        }
    );

    router.get(
        ProductsApiPath.$ID_COMMENTS, 
        async (req, res, next) => {
            const { data: comments } = await productService.getCommentsByProduct(req.params.id);
            req.result = {
                status: 200,
                body: comments,
            }
            
            next();
        }
    );

    router.put(
        ProductsApiPath.$ID,
        upload.single('image'),
        validate(productValidation.save), 
        async (req, res, next) => {
            const { data: updatedProduct, error } = await productService.update(req.params.id, {
                ...req.body,
                image: req.file,
            });
            req.result = {
                status: 200,
                body: updatedProduct,
            };
                
            next();   
        }
    );

    router.delete(
        ProductsApiPath.$ID, 
        async (req, res, next) => {
            const { id } = req.params;
            const { error } = await productService.delete(id);

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
