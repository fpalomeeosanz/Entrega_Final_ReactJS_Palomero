import { useState, useEffect } from 'react';
import { mockItems } from './mockItems'; 
import Item from './Item';
import Loader from './Loader';
import ItemCount from './ItemCount';

//se importa la promesa simulada y se cera stado para almacenar el elemento, se carga el Loader y se inserta y se carga el componente ItemCount y pasa addToCart como prop

const ItemDetailContainer = ({ addToCart }) => { 
  const [item, setItem] = useState([]);
  const [loading] = useState(true);

  useEffect(() => {
    setItem(mockItems);
  }, []);

  return (
    <div className="item-detail-container">
      {loading ? (
        <Loader />
      ) : item ? (
        <div>
          <Item item={item} />
          <ItemCount stock={item.stock} onAdd={addToCart} />
        </div>
      ) : (
        <p>No encuentras lo que buscas, escríbenos!.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer