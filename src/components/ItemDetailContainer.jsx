import { useState, useEffect } from 'react';
import { mockItems } from './mockItems'; 
import Item from './Item';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

//se importa la promesa simulada y se cera stado para almacenar el elemento, se carga el Loader y se inserta y se carga el componente ItemCount y pasa addToCart como prop

const ItemDetailContainer = () => { 

  const { id } = useParams( ); 
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    const selectedItem = mockItems.find((product) => product.id === parseInt(id));

    if (selectedItem) {
      setItem(selectedItem);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <Loader />
      ) : item ? (
        <div>
          <Item item={item} imageUrl={item.imageUrl} />
        </div>
      ) : (
        <p>No encuentras lo que buscas, escríbenos!.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer