import axios from 'axios';

export class CommentService {
    constructor({ apiUrl }) {
        this.apiUrl = apiUrl;
    }

    async create(payload) {

        return axios.post(`${this.apiUrl}/comments`, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    getByProduct(productId) {
        return axios.get(`${this.apiUrl}/products/${productId}/comments`);
    }

    delete(id) {
        return axios.delete(`${this.apiUrl}/comments/${id}`);
    }
}
