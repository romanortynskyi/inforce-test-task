import firebase from 'firebase-admin';
import path from 'path';
import { v4 as uuid } from 'uuid';

export const uploadToStorage = async ({
    file,
}): Promise<any> => {
    const bucket = firebase.storage().bucket(process.env.BUCKET_URI);

    const extension = path.extname(file.originalname);

    const filename = `${uuid()}${extension}`;

    const blob = bucket.file(filename);
    const blobStream = blob.createWriteStream();

    return new Promise((resolve, reject) => {
        blobStream.on('error', err => {
            return reject(err);
        });
    
        blobStream.on('finish', () => {
            const uri = `https://storage.googleapis.com/${bucket.name}/${filename}`;
            const result = {
                filename,
                uri,
            }
            return resolve(result);
        });
    
        blobStream.end(file.buffer);
    });
}

export const deleteFromStorage = async (filename) => {
    const bucket = firebase.storage().bucket(process.env.BUCKET_URI);
    await bucket.file(filename).delete();
}
