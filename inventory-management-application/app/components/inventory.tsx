import React, { useState } from 'react';

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
      <h2>Inventory</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(Number(e.target.value))}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
