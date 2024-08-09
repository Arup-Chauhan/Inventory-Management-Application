"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Modal, TextField, Button, Grid } from '@mui/material';
import theme from './components/theme';
import { fetchInventory, addItemToFirestore, removeItemFromFirestore } from './database/firebase_utils';

interface InventoryItem { 
  name: string;
  quantity: number;
}

const Home: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1); // default quantity of 1 in the tab

  useEffect(() => {
    const updateInventory = async () => {
      const inventoryList: InventoryItem[] = await fetchInventory();
      setInventory(inventoryList);
    };
    updateInventory();
  }, []);

  const addItem = async () => {
    if (itemName && itemQuantity > 0) {
      await addItemToFirestore(itemName, itemQuantity); 
      const inventoryList: InventoryItem[] = await fetchInventory();
      setInventory(inventoryList);
      setItemName('');
      setItemQuantity(1); // Reset quantity to 1 after adding for the item button
      handleClose();
    }
  };

  const removeItem = async (item: string) => {
    await removeItemFromFirestore(item);
    const inventoryList: InventoryItem[] = await fetchInventory();
    setInventory(inventoryList);
  };

  const increaseQuantity = () => setItemQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setItemQuantity((prev) => Math.max(prev - 1, 1));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Head>
          <title>Inventory Management App</title>
          <meta name="description" content="Manage your inventory efficiently" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box display="flex" flexDirection="column" alignItems="center" padding={4}>
            <Typography variant="h4" gutterBottom>Inventory Management</Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add Item
            </Button>
          </Box>

          <Modal open={open} onClose={handleClose}>
  <Box 
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }}>
    <Typography variant="h6" component="h2" color="primary"> Add Item </Typography> {/*Modified colour*/}
    <TextField
      label="Item Name"
      value={itemName}
      onChange={(e) => setItemName(e.target.value)}
      fullWidth
      margin="normal"
    />
    <Box display="flex" alignItems="center" gap={2} marginY={2}>
      <Button variant="outlined" onClick={decreaseQuantity}>-</Button>
      <Typography variant="body1">{itemQuantity}</Typography>
      <Button variant="outlined" onClick={increaseQuantity}>+</Button>
    </Box>
    <Button 
      variant="contained" 
      onClick={addItem}
      sx={{
        backgroundColor: '#0d47a1', // Dark blue background
        color: '#ffffff',           // White text color
        '&:hover': {
          backgroundColor: '#1565c0', // Lighter blue on hover
        },
      }}
    >
      Add Item
    </Button>
  </Box>
</Modal>

          <Grid container spacing={3} justifyContent="center" marginTop={2}>
            <Grid item xs={12} sm={8} md={6}>
              <Box>
                {inventory.length === 0 ? (
                  <Typography variant="body1">No items in inventory.</Typography>
                ) : (
                  inventory.map(({ name, quantity }, index) => (
                    <Box
                      key={index} 
                      display="flex" 
                      justifyContent="space-between" 
                      alignItems="center" 
                      padding={2} 
                      marginBottom={2} 
                      border="1px solid #ccc"
                      borderRadius="8px"
                      bgcolor="background.paper"
                      color="text.primary"
                    >
                      <Typography variant="body1">{name} - {quantity}</Typography>
                      <Button variant="contained" color="secondary" onClick={() => removeItem(name)}>
                        Remove
                      </Button>
                    </Box>
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Home;
