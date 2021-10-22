import firebase from 'firebase-admin';

import { Collections } from '../common/enum/collections';

export default class commentRepository {
    async create(newComment) {
        const { id } = await firebase
            .firestore()
            .collection(Collections.COMMENTS)
            .add(newComment);

        const commentDoc: FirebaseFirestore.DocumentSnapshot = await firebase
            .firestore()
            .collection(Collections.COMMENTS)
            .doc(id)
            .get();

        const comment = {
            id,
            ...commentDoc.data(),
        }

        return comment;
    }

    async getAll() {
        const commentsQuerySnapshot: FirebaseFirestore.QuerySnapshot = await firebase
            .firestore()
            .collection(Collections.COMMENTS)
            .get();
        const comments = [];

        commentsQuerySnapshot.forEach(commentDoc => {
            const comment = {
                id: commentDoc.id,
                ...commentDoc.data(),
            };

            comments.push(comment);
        });

        return comments;
    }

    async getById(id: string) {
        const commentDoc: FirebaseFirestore.DocumentSnapshot = await firebase
            .firestore()
            .collection(Collections.COMMENTS)
            .doc(id)
            .get();

        if(commentDoc.exists) {
            const comment = {
                id: commentDoc.id,
                ...commentDoc.data(),
            };
    
            return comment;
        }

        return null;
    }

    async getByProduct(productId: string) {
        const commentsQuerySnapshot: FirebaseFirestore.QuerySnapshot = await firebase
            .firestore()
            .collection(Collections.COMMENTS)
            .where('productId', '==', productId)
            .get();
        const comments = [];

        commentsQuerySnapshot.forEach(commentDoc => {
            const comment = {
                id: commentDoc.id,
                ...commentDoc.data(),
            };

            comments.push(comment);
        });

        return comments;
    }

    async delete(id: string) {
        const commentRef: FirebaseFirestore.DocumentReference = firebase
            .firestore()
            .collection(Collections.COMMENTS)
            .doc(id);

        await commentRef.delete();
    }
}
