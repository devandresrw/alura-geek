import { openDB } from 'idb'

const DB_NAME = 'my-db'
const STORE_NAME = 'producto'
const DB_VERSION = 1

export const initDB = async () => {
    const db = await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME,
                    { keyPath: 'id', autoIncrement: true }
                );
            }
        },
    });
    return db;
};

export const addProduct = async (product: { name: string; price: number; url: string }) => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.add(product);
    await tx.done;
};

export const clearProduct = async () => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.clear();
    await tx.done;
    console.log('Clear data completed')
    window.location.reload()
}

export const getAllProducts = async () => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const products = await store.getAll();
    await tx.done;
    return products
}

export const deleteProduct = async (id: number) => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.delete(id);
    await tx.done;
};