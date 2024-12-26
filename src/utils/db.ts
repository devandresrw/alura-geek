import { openDB } from 'idb'
import { useProductStore } from '@/stores'
import { Product } from '@/types/product'

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

export const addProduct = async ({ ...product }: Product) => {
    const db = await initDB();
    try {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        await store.add(product);
        await tx.done;
        await useProductStore.getState().refreshProducts()
    } catch (e) {
        console.error('Error al agregar producto:', e);
    }

};

export const clearProduct = async () => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.clear();
    await tx.done;
    console.log('Clear data completed')
    useProductStore.getState().refreshProducts()
}

export const getAllProducts = async (): Promise<Product[]> => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const products = await store.getAll();
    await tx.done;
    return products
}

export const deleteProduct = async (id: string): Promise<void> => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.delete(id);
    await tx.done;
    await useProductStore.getState().refreshProducts()
};