import { Errors } from '../common/enum/Errors';

export default class CommentService {
    _commentRepository;
    _productRepository;

    constructor({ commentRepository, productRepository }) {
        this._commentRepository = commentRepository;
        this._productRepository = productRepository;
    }

    async create(comment): Promise<ServiceResponse> {
        const product = await this._productRepository.getById(comment.productId)

        if(!product) {
            return {
                data: null,
                error: Errors.PRODUCTS.notFoundById(comment.productId),
            };
        }

        const createdComment = await this._commentRepository.create(comment);

        return {
            data: createdComment,
            error: null,
        };
    }

    async getAll(): Promise<ServiceResponse> {
        const comments = await this._commentRepository.getAll();

        return {
            data: comments,
            error: null,
        };
    }

    async getById(id: string): Promise<ServiceResponse> {
        const city = await this._commentRepository.getById(id);
        if(!city) {
            return {
                data: null,
                error: Errors.COMMENTS.notFoundById(id),
            };
        }
        
        return {
            data: city,
            error: null,
        };
    }

    async delete(id: string): Promise<ServiceResponse> {
        const city = await this._commentRepository.getById(id);

        if(city) {
            await this._commentRepository.delete(id);
            return {
                data: null,
                error: null,
            }
        }

        else {
            return {
                data: null,
                error: Errors.COMMENTS.notFoundById(id),
            }    
        }
    }
}
