import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { mockItems } from "./mockItems.js";
import Loader from './Loader';


//se crea ItemListContainer para mostra listado
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    
    setItems(mockItems);
    setLoading(false);
    }, 3000);
},[]);

  return (
    <div className="item-list-container">
      {loading ? (
        <Loader />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
