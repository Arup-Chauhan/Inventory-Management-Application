"use client";

import { firestore } from '@/firebase_config_sample'; //Adjust as needed
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
    try {
        const snapshot = query(collection(firestore, 'inventory'));
        const docs = await getDocs(snapshot);
        const inventoryList: InventoryItem[] = [];
        docs.forEach((doc) => {
            const data = doc.data(); // Get data from the document

            // Ensure that data has the correct type before pushing to inventoryList
            if (data && typeof data.quantity === 'number' && typeof data.name === 'string') {
                console.log("Document Data:", data);  // Log each document's data
                inventoryList.push({ name: data.name, quantity: data.quantity });
            }
        });
        console.log("Inventory List after fetch:", inventoryList);  // Log the final inventory list
        return inventoryList;
    } catch (error) {
        console.error("Error fetching inventory:", error);
        return [];
    }
};

// Add an item to Firestore
export const addItemToFirestore = async (item: string, quantity: number): Promise<void> => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      await setDoc(docRef, { name: item, quantity: data.quantity + quantity });
    } else {
      await setDoc(docRef, { name: item, quantity });
    }
  };
  

// Remove an item from Firestore
export const removeItemFromFirestore = async (item: string): Promise<void> => {
    try {
        const docRef = doc(collection(firestore, 'inventory'), item);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const { quantity } = data as InventoryItem;
            if (quantity === 1) {
                await deleteDoc(docRef);
            } else {
                await setDoc(docRef, { name: item, quantity: quantity - 1 });
            }
        }
    } catch (error) {
        console.error("Error removing item from Firestore:", error);
    }
};
