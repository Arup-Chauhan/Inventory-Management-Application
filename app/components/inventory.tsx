"use client";

import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const Inventory: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState<string>('');
  const [itemQuantity, setItemQuantity] = useState<number>(0);

  const addItem = () => {
    const newItem: Item = {
      id: items.length + 1,
      name: itemName,
      quantity: itemQuantity,
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemQuantity(0);
  };

  return (
    <div>
      <Typography variant="h2">Inventory</Typography>
      <TextField
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Quantity"
        type="number"
        variant="outlined"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(Number(e.target.value))}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addItem}>
        Add Item
      </Button>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={`${item.name} - ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Inventory;
