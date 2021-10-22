import { ErrorCodes } from '../common/enum/errors/error-codes';

export const validationError = (error) => {
    const result = {
        code: ErrorCodes.VALIDATION_ERROR,
        message: error.msg,
    };

    return result;
}
