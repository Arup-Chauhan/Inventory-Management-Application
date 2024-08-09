import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Inventory from './components/inventory';
import { Box, Typography, Modal, TextField, Button } from '@mui/material';
import { fetchInventory, addItemToFirestore, removeItemFromFirestore } from './database/firebase_utils';

// define the inventory item type via interface
interface InventoryItem { 
  name: string;
  quantity: number;
}


const Home: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]); // Update the state type
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')

  // Fetch inventory on component mount
  useEffect(() => {
    const updateInventory = async () => {
      const inventoryList: InventoryItem[] = await fetchInventory();
      setInventory(inventoryList);
    };
    updateInventory();
  }, []);

  // Add an item
  const addItem = async () => {
    if (itemName) {
      await addItemToFirestore(itemName);
      const inventoryList: InventoryItem[] = await fetchInventory();
      setInventory(inventoryList);
      setItemName('');
      handleClose();
    }
  };

  // Remove an item
  const removeItem = async (item: string) => {
    await removeItemFromFirestore(item);
    const inventoryList: InventoryItem[] = await fetchInventory();
    setInventory(inventoryList);
  };

  // Modal control functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Head>
        <title>Inventory Management App</title>
        <meta name="description" content="Manage your inventory efficiently" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Inventory Management</h1>
        <Box>
          <Button onClick={handleOpen}>Add Item</Button>
          {/* Render inventory items here */}
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box>
            <TextField
              label="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button onClick={addItem}>Add</Button>
          </Box>
        </Modal>
      </main>
    </div>
  );
};


export default Home;
