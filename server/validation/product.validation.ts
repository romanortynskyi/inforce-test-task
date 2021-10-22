import { body } from 'express-validator';

/*
name
count
size: {
    width
    height
}
weight
*/ 

export const validation = {
    save: [
        body('name')
            .notEmpty().withMessage('name should not be empty'),

        body('count')
            .isInt().withMessage('count should be an integer'),
        
        body('width')
            .isNumeric().withMessage('width should be a number'),

        body('height')
            .isNumeric().withMessage('height should be a number'),

        body('weight')
            .isNumeric().withMessage('weight should be a number'),
    ],
    update: [
        body('name')
            .notEmpty().withMessage('name should not be empty'),

        body('count')
            .isInt().withMessage('count should be an integer'),
        
        body('width')
            .isNumeric().withMessage('width should be a number'),

        body('height')
            .isNumeric().withMessage('height should be a number'),
            
        body('weight')
            .isNumeric().withMessage('weight should be a number'),
    ],
}
