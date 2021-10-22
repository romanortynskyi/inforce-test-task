import { ErrorCodes } from './comment-error-codes';

export const Errors = {
    notFoundById: (id: string) => {
        const error = {
            code: ErrorCodes.COMMENT_NOT_FOUND_BY_ID,
            msg: `Comment ${id} does not exist`,
        };

        return error;
    },
}
