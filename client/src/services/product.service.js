import axios from 'axios';

export class ProductService {
    constructor({ apiUrl }) {
        this.apiUrl = apiUrl;
    }

    async create(payload) {

        return axios.post(`${this.apiUrl}/products`, payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    getAll() {
        return axios.get(`${this.apiUrl}/products`);
    }

    getById(id) {
        return axios.get(`${this.apiUrl}/products/${id}`);
    }

    // TODO: update

    delete(id) {
        return axios.delete(`${this.apiUrl}/products/${id}`);
    }
}
