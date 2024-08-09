import { firestore } from '@/firebase_config';
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    deleteDoc,
    getDoc,
} from 'firebase/firestore';

interface InventoryItem {
    name: string;
    quantity: number;
}

// Fetch inventory data from Firestore
export const fetchInventory = async (): Promise<InventoryItem[]> => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList: InventoryItem[] = [];
    docs.forEach((doc) => {
        const data = doc.data(); // Get data from the document

        // Ensure that data has the correct type before pushing to inventoryList
        if (data && typeof data.quantity === 'number') {
            inventoryList.push({ name: doc.id, quantity: data.quantity });
        }
    });
    return inventoryList;
};

// Add an item to Firestore
export const addItemToFirestore = async (item: string): Promise<void> => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        const { quantity } = data as InventoryItem;
        await setDoc(docRef, { quantity: quantity + 1 });
    } else {
        await setDoc(docRef, { quantity: 1 });
    }
};

// Remove an item from Firestore
export const removeItemFromFirestore = async (item: string): Promise<void> => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        const { quantity } = data as InventoryItem;
        if (quantity === 1) {
            await deleteDoc(docRef);
        } else {
            await setDoc(docRef, { quantity: quantity - 1 });
        }
    }
};
