import { Errors } from '../common/enum/Errors';
import { uploadToStorage, deleteFromStorage } from '../utils/storage';

export default class ProductService {
    _productRepository;
    _commentRepository;

    constructor({ productRepository, commentRepository }) {
        this._productRepository = productRepository;
        this._commentRepository = commentRepository;
    }

    async create(product): Promise<ServiceResponse> {
        const image = await uploadToStorage({
            file: product.image,
        })
        const createdProduct = await this._productRepository.create({
            ...product,
            image,
        });

        return {
            data: createdProduct,
            error: null,
        };
    }

    async getAll(): Promise<ServiceResponse> {
        const products = await this._productRepository.getAll();

        return {
            data: products,
            error: null,
        };
    }

    async getById(id: string): Promise<ServiceResponse> {
        const city = await this._productRepository.getById(id);
        if(!city) {
            return {
                data: null,
                error: Errors.PRODUCTS.notFoundById(id),
            };
        }
        
        return {
            data: city,
            error: null,
        };
    }

    async getCommentsByProduct(id: string): Promise<ServiceResponse> {
        const product = await this._productRepository.getById(id);
        if(!product) {
            return {
                data: null,
                error: Errors.PRODUCTS.notFoundById(id),
            };
        }

        const comments = await this._commentRepository.getByProduct(id);
        
        return {
            data: comments,
            error: null,
        };
    }

    async update(id, newData): Promise<ServiceResponse> {
        const product = await this._productRepository.getById(id);

        if(!product) {
            return {
                data: null,
                error: Errors.PRODUCTS.notFoundById(id),
            };
        }

        await deleteFromStorage(product.image.filename);

        const image = await uploadToStorage({
            file: newData.image,
        })
        const updatedProduct = await this._productRepository.update(id, {
            ...newData,
            image,
        });

        return {
            data: updatedProduct,
            error: null,
        };
    }

    async delete(id: string): Promise<ServiceResponse> {
        const city = await this._productRepository.getById(id);

        if(city) {
            await this._productRepository.delete(id);
            return {
                data: null,
                error: null,
            }
        }

        else {
            return {
                data: null,
                error: Errors.PRODUCTS.notFoundById(id),
            }    
        }
    }
}
