import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { mockItems } from "./mockItems.js";

//se crea ItemListContainer para mostra listado
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(mockItems);

  useEffect(() => {
    setTimeout(() => {
    
    setItems(mockItems);
    setLoading(false);
    }, 3000);
},[]);

  return (
    <div className="item-list-container">
      {loading ? (
        <p>Estamos procesando tu solicitud...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
