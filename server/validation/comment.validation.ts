import { body } from 'express-validator';

/*
"productId": 1,
"description": "some text here",
"date": "14:00 22.08.2021"
*/ 

export const validation = {
    save: [
        body('productId')
            .notEmpty().withMessage('productId should not be empty'),

        body('text')
            .notEmpty().withMessage('text should not be empty'),
    ],
}
