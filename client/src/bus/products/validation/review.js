import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    content: Yup.string()
        .min(1, 'Введіть відгук')
        .max(255, 'Відгук має містити до 255 символів'),
    rating: Yup.number()
        .integer()
        .min(0)
        .max(5),
});
