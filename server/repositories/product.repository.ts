import firebase from 'firebase-admin';

import { Collections } from '../common/enum/collections';

export default class ProductRepository {
    async create(newProduct) {
        const { id } = await firebase
            .firestore()
            .collection(Collections.PRODUCTS)
            .add(newProduct);

        const productDoc: FirebaseFirestore.DocumentSnapshot = await firebase
            .firestore()
            .collection(Collections.PRODUCTS)
            .doc(id)
            .get();

        const product = {
            id,
            ...productDoc.data(),
        }

        return product;
    }

    async getAll() {
        const productsQuerySnapshot: FirebaseFirestore.QuerySnapshot = await firebase
            .firestore()
            .collection(Collections.PRODUCTS)
            .get();
        const products = [];

        productsQuerySnapshot.forEach(productDoc => {
            const city = {
                id: productDoc.id,
                ...productDoc.data(),
            };

            products.push(city);
        });

        return products;
    }

    async getById(id: string) {
        const productDoc: FirebaseFirestore.DocumentSnapshot = await firebase
            .firestore()
            .collection(Collections.PRODUCTS)
            .doc(id)
            .get();

        if(productDoc.exists) {
            const product = {
                id: productDoc.id,
                ...productDoc.data(),
            };
    
            return product;
        }

        return null;
    }
    
    async update(id: string, updatedProduct) {
        const productRef: FirebaseFirestore.DocumentReference = firebase
            .firestore()
            .collection(Collections.PRODUCTS)
            .doc(id);
        await productRef.update(updatedProduct);

        const productDoc: FirebaseFirestore.DocumentSnapshot = await productRef.get();

        const product = {
            id: productDoc.id,
            ...productDoc.data(),
        };

        return product;
    }

    async delete(id: string) {
        const productRef: FirebaseFirestore.DocumentReference = firebase
            .firestore()
            .collection(Collections.PRODUCTS)
            .doc(id);

        await productRef.delete();
    }
}
