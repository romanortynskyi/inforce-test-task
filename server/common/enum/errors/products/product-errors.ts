import { ErrorCodes } from './product-error-codes';

export const Errors = {
    notFoundById: (id: string) => {
        const error = {
            code: ErrorCodes.PRODUCT_NOT_FOUND_BY_ID,
            msg: `Product ${id} does not exist`,
        };

        return error;
    },
}
