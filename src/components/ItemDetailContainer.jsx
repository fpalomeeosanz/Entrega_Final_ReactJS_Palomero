import { useState, useEffect } from 'react';
import { mockItems } from './mockItems'; 
import Item from './Item';
import Loader from './Loader';
//se importa la promesa simulada y se cera stado para almacenar el elemento, se carga el Loader y se inserta 

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading] = useState(true);
  console.log(mockItems);

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
        </div>
      ) : (
        <p>No encuentras lo que buscas, escríbenos!.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;