import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm.jsx";

import React, {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <>
     <AddItemForm addItem={addItem} />

     <ItemList items={items} removeItem={removeItem} />
      
    
    </>
  )
}


export default App
